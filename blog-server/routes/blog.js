let express = require('express');
let router = express.Router();
let commonmark = require("commonmark");
let mongoConn = require("../mongoConn");

// this probably doesnt work anymore, use mongoConn.getDb(callback() {...})
let db;

// GET blog post with postid written by username
router.get("/:username/:postid", async function(req, res) {
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

  	mongoConn.getDb(async function (db)
  	{
  		let post = await db.collection("Posts").findOne({$and: [{"username":username, "postid":postid}]});
  		console.log(post);

  		if (post == null){
  			console.log("Couldn't find blogpost with username=" + username + " postid=" + postid);
    		res.status(404);
    		return;
  		} else {
  			var reader = new commonmark.Parser();
			var writer = new commonmark.HtmlRenderer();
			var renderedTitle = writer.render(reader.parse(post.title)); 
			var renderedBody = writer.render(reader.parse(post.body));
			res.render("oneBlogPost", 
				{"title": post.title, "markdownTitle": renderedTitle, "markdownBody": renderedBody});
  		}
  	});
});

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

