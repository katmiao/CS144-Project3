let express = require('express');
let router = express.Router();
let commonmark = require("commonmark");

// MongoDB connection pooling (not sure if this actually goes here)
let MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = 'mongo-uri';
let db;

// Initialize connection once, reuse the database object 
MongoClient.connect(MONGODB_URI, function(err, database) {
  db = database;
  console.log("Initialized MongoDB connection.")
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

module.exports = router;

