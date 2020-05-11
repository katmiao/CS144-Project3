let express = require('express');
let router = express.Router();
let mongoConn = require("../mongoConn");
let bcrypt =  require('bcryptjs');
let jwt = require('jsonwebtoken');

const secretKey = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c"

router.get("/:redirect?", async function(req, res) 
{
	let username = req.query.username ? req.query.username : ""
	let password = req.query.password ? req.query.password : ""
	let redirect = req.query.redirect ? req.query.redirect : ""

	console.log("--- [get] logging in for username=" + username + " password=" + password + " redirect=" + redirect);

	res.render("login", {
		"username": username,
		"password": password,
        "redirect": redirect
    });
})

router.post("/", async function(req, res) 
// router.post("/:username/:password/:redirect?", async function(req, res) 
{
	let username = req.body.username;
	let password = req.body.password;
	let redirect = req.body.redirect ? req.body.redirect : "";

	console.log("--- [post] logging in for username=" + username + " password=" + password + " redirect=" + redirect);

	mongoConn.getDb(async function (db)
  	{
  		let user = await db.collection("Users")
  			.findOne({"username": req.body.username});

  		if(user === null)
        {
            console.log("--- username doesn't exist");
            res.status(401).render('login', {
		    		'username' : username,
		    		'password' : password, 
		    		'redirect': redirect
		    });
            return;
        }

		bcrypt.compare(password, user.password).then((result)=>{
		  	if (result)
		  	{
		  		console.log("--- authentication successful")
		  		twoHours = Math.floor(Date.now() / 1000) + (2*60*60)

		    	// set an authentication session cookie in JSWT
		    	// JWT.SIGN(PAYLOAD, SECRETORPRIVATEKEY, HEADER
		    	let token = jwt.sign(
		    		{"exp": twoHours, "usr": username},
		    		secretKey,
		    		{algorithm: "HS256"} //, type: "JWT"}
		    	);

		    	res.cookie(
		    		"JWT", 
		    		token, 
		    		{} //{signed: true, httpOnly: true}
				);

		    	console.log("--- jwt & cookie success");

		    	if (redirect == "") {
		    		res.status(200).send("200 OK: Authentication successful!")
		    	}
		    	else {
		    		res.redirect(redirect)
		    	}
		  	} else 
		  	{
		    	console.log("--- authentication failed")
		    	// return status code “401 Unauthorized” 
		    	// and an HTML form with username and password in the response body
		    	res.status(401).render('login', {
		    		'username' : username,
		    		'password' : password, 
		    		'redirect': redirect
		    	});
		  	}
		})
		.catch((err)=>console.error(err))

  	});

})

module.exports = router;