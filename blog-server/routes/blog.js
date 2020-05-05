let express = require('express');
let router = express.Router();
let commonmark = require("commonmark");
let mongoConn = require("../mongoConn");

// this probably doesnt work anymore, use mongoConn.getDb(callback() {...})
let db;

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

router.get("/:username", async function(req, res) {
	let username = req.params.username;
	mongoConn.getDb(async function(db)
	{
		let posts = await db.collection("Posts").find({"username": username}).toArray();
		console.log(posts[0].title);
		res.render('user', { title: `${username}'s Blog Posts`, posts: posts });
	});
});

module.exports = router;

