let express = require('express');
let router = express.Router();
let commonmark = require("commonmark");
const assert = require('assert');

// MongoDB connection pooling (not sure if this actually goes here)
let MongoClient = require('mongodb').MongoClient;

// Use '192...' if using Docker toolbox, 'localhost' if not
const MONGODB_URI = 'mongodb://192.168.99.100:27017/BlogServer';
//const MONGODB_URI = 'mongodb://localhost:27017/BlogServer';
let db;

// Initialize connection once, reuse the database object 
MongoClient.connect(MONGODB_URI, function(err, client) {
  assert.equal(null, err);
  db = client.db("BlogServer");
  console.log("Initialized MongoDB connection.");
});

// GET blog post with postid written by username
router.get("/:username/:postid", function(req, res) {
	let username = req.params.username;
	let postid = req.params.postid;

	// check if valid postid
	if (isNaN(postid)) {
		console.log("Invalid postid: " + postid);
		res.sendStatus(400);
		return;
	}

	console.log("Getting postid=" + postid + " for username=" + username);
	postid = parseInt(postid);

	// TODO - figure this out
	// TypeError: Cannot read property 'collection' of undefined
  	db.collection("Posts").findOne({$and: [{"username":username, "postid":postid}]}, 
  		function(err, doc) {
    		if (err){
    			throw err;
    		} 

    		else if (doc) {
    			var reader = new commonmark.Parser();
				var writer = new commonmark.HtmlRenderer();
				// parsed is a Node tree, rendered is a String
				var parsedTitle = reader.parse(doc.title); 
				var parsedBody = reader.parse(doc.body);
				var renderedTitle = writer.render(parsedTitle); 
				var renderedBody = writer.render(parsedBody);

				res.render("oneBlogPost", 
					{"title": doc.title, "markdownTitle": renderedTitle, "markdownBody": renderedBody});
    		} 

    		else {
    			console.log("Couldn't find blogpost with username=" + username + " postid=" + postid);
    			res.status(404);
    		}
  		}
  	);
})

router.get("/:username", function(req, res) {
	res.render('user', { title: 'Express' });
})

module.exports = router;

