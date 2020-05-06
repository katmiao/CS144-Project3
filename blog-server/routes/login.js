let express = require('express');
let router = express.Router();
let mongoConn = require("../mongoConn");
let bcrypt =  require('bcryptjs');
let jwt = require('jsonwebtoken');

// GET /login
router.get("/", async function(req, res) {
	console.log("GET /login for username=" + req.params.username + " with password=" + req.params.password);
	res.render("login", {
        "username": req.params.username ? req.params.username : "",
        "password": req.params.password ? req.params.password : "",
        "redirect": req.params.redirect ? req.params.redirect : ""
    });
})

// POST /login
router.post("/", async function(req, res) {
	let username = req.params.username;
	let password = req.params.password;
	//console.log("POST /login for username=" + username + " with password=" + password);

	// TODO
	mongoConn.getDb(async function (db)
  	{
  		let user = await db.collection("Users").findOne({"username": req.body.username});

  	});

})

module.exports = router;