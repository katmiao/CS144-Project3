let express = require('express');
let router = express.Router();
let commonmark = require("commonmark");
let mongoConn = require("../mongoConn");

// GET blog post with postid written by username
router.get("/:username/:postid", async function(req, res) {
	let username = req.params.username;
	let postid = req.params.postid;

	// check if valid postid
	if (isNaN(postid)) {
		console.log("Invalid postid: " + postid);
		res.sendStatus(400);
		res.redirect("/error");
		return;
	}

	console.log("Getting postid=" + postid + " for username=" + username);
	postid = parseInt(postid);

  	mongoConn.getDb(async function (db)
  	{
  		
  		let exists = await db.collection("Users")
			.find({"username": username})
			.limit(1)
			.toArray();

		if(exists.length == 0)
		{
			res.status(404).send("404 Not Found: the entered username doesn't exist");
			return;
		}

		let post = await db.collection("Posts").findOne({$and: [{"username":username, "postid":postid}]});
  		console.log("Found post:" + post);

  		if (post == null){
  			console.log("Couldn't find blogpost with username=" + username + " postid=" + postid);
    		res.status(404).send("404 Not Found: the postid doesn't exist for this user");
    		return;
  		} else {
  			var reader = new commonmark.Parser();
			var writer = new commonmark.HtmlRenderer();
			var renderedTitle = writer.render(reader.parse(post.title)); 
			var renderedBody = writer.render(reader.parse(post.body));
			res.status(200).render("oneBlogPost", 
				{"title": post.title, "markdownTitle": renderedTitle, "markdownBody": renderedBody});
  		}
  	});
});

function epochToString(epoch)
{
	let date = new Date(epoch);
	let day = date.getDate();
	let month = date.getMonth();
	let year = date.getFullYear();
	let hour = date.getHours();
	let zeroHour = "";
	let zeroDay = "";
	let zeroMonth = "";
	if(hour < 10)
		zeroHour = "0";
	if(day < 10)
		zeroDay = "0";
	if(month < 10)
		zeroMonth = "0";
	let minutes = date.getMinutes();
	return `${zeroMonth}${month}/${zeroDay}${day}/${year} ${zeroHour}${hour}:${minutes}`;
}

router.get("/:username", async function(req, res) {
	let username = req.params.username;
	let lastPostid = Number.MIN_SAFE_INTEGER;
	if(req.query.start !== undefined)
	{
		if(/^-?\d+$/.test(req.query.start))
		{
			lastPostid = parseInt(req.query.start, 10);
		}
		else 
		{
			res.status(400).send("400 Invalid Request: the entered postid was invalid");
			return;
		}
	}
	
	mongoConn.getDb(async function(db)
	{
		// check if username exists
		let exists = await db.collection("Users")
			.find({"username": username})
			.limit(1)
			.toArray();

		if(exists.length == 0)
		{
			res.status(404).send("404 Not Found: the entered username doesn't exist");
			return;
		}

		let posts = await db.collection("Posts")
			.find({"username": username, "postid": { $gte: lastPostid }})
			.sort({"postid": 1})
			.limit(5)
			.toArray();
		
		for(let i = 0; i < posts.length; i++)
		{
			posts[i].created = epochToString(posts[i].created);
			posts[i].modified = epochToString(posts[i].modified);
		}

		let hasNext = true;
		if(posts.length < 5)
			hasNext = false;  

		let nextPostid = posts[posts.length - 1].postid + 1;
		res.status(200).render('user', 
			{ 
				title: `${username}'s Blog Posts`, 
				posts: posts, 
				username: username,
				nextPostid: nextPostid,
				hasNext: hasNext
			}
		);
	});
});

module.exports = router;

