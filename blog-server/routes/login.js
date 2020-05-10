let express = require('express');
let router = express.Router();
let mongoConn = require("../mongoConn");
let bcrypt =  require('bcryptjs');
let jwt = require('jsonwebtoken');

router.get("/", async function(req, res) 
{
	res.render("login", {
		"username": req.body.username ? req.body.username : "",
		"password": req.body.password ? req.body.password : "",
        "redirect": req.body.redirect ? req.body.redirect : ""
    });
})

router.post("/", async function(req, res) 
// router.post("/:username/:password/:redirect?", async function(req, res) 
{
	let username = req.body.username;
	let password = req.body.password;
	let redirect = req.body.redirect ? req.body.redirect : ""

	console.log("--- logging in for username=" + username + " password=" + password);

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

		    	// TODO - set an authentication session cookie in JSWT


		    	if (redirect == "") {
		    		res.status(200).send("200 OK: authentication successful!")
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