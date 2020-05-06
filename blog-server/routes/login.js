let express = require('express');
let router = express.Router();
let mongoConn = require("../mongoConn");

// GET /login
router.get("/", async function(req, res) {
	res.render("login", {
        "username": req.query.username ? req.query.username : "",
        "password": req.query.password ? req.query.password : "",
        "redirect": req.query.redirect ? req.query.redirect : ""
    });
})

// POST /login
router.post("/", async function(req, res) {
	let username = req.params.username;
	let password = req.params.password;
	console.log("POST /login for username=" + username + " with password=" + password);

	// TODO

})

module.exports = router;