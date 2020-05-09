let express = require('express');
let router = express.Router();
let mongoConn = require("../mongoConn");

// GET /api/:username
router.get("/:username", async function(req, res) 
{
    const username = req.params.username;

    // TODO: AUTHENTICATE USER WITH COOKIE

    // find posts in the database
    mongoConn.getDb(async function(db)
    {
        /*let exists = await db.collection("Users").findOne({"username": username});
        if(exists === null)
        {
            res.status(404).send("404 Not Found: the entered username doesn't exist");
            return;
        }*/

        let posts = await db.collection("Posts")
            .find({"username": username})
            .toArray();

        res.json(posts);
    });
});

// GET /api/:username/:postid
router.get("/:username/:postid", async function(req, res) 
{
    let { username, postid } = req.params;
    
    // check if postid is valid
    if(/^-?\d+$/.test(postid))
    {
        postid = parseInt(postid, 10);
    }
    else
    {
        res.status(400).send("400 Bad Request: the entered postid is invalid");
        return;
    }

    // TODO: AUTHENTICATE USER WITH COOKIE

    // find post in database
    mongoConn.getDb(async function(db)
    {
        /*let exists = await db.collection("Users").findOne({"username": username});
        if(exists === null)
        {
            res.status(404).send("404 Not Found: the entered username doesn't exist");
            return;
        }*/

        let post = await db.collection("Posts")
            .findOne({"username": username, "postid": postid});
        
        if(post === null)
        {
            res.status(404).send("404 Not Found: the entered postid doesn't exist");
            return;
        }

        res.json(post);
    });
});

// POST /api/:username/:postid
router.post("/:username/:postid", async function(req, res) 
{
    let { username, postid } = req.params;
    let { title, body } = req.body; 

    // check if the required parameters are supplied
    if(title === undefined || body === undefined)
    {
        res.status(400).send("400 Bad Request: request does not contain parameters title and/or body");
        return;
    }
    
    // check if postid is valid
    if(/^-?\d+$/.test(postid))
    {
        postid = parseInt(postid, 10);
    }
    else
    {
        res.status(400).send("400 Bad Request: the entered postid is invalid");
        return;
    }

    // AUTHENTICATE USER WITH COOKIE

    // go to database
    mongoConn.getDb(async function(db)
    {  
        // check if post already exists in the database
        let exists = await db.collection("Posts")
            .findOne({"username":username, "postid":postid});
        
        // post already exists
        if(exists !== null)
        {
            res.status(400).send("400 Bad Request: username and postid combination already exists in the database");
            return;
        }

        // post doesn't exist, so create a new one
        let currentTime = Date.now();
        await db.collection("Posts").insertOne({ 
            "postid": postid, 
            "username": username, 
            "created": currentTime, 
            "modified": currentTime, 
            "title": title, 
            "body": body
        });

        res.status(201).send("201 Created: successfully inserted new record in database");
    });
});

// PUT /api/:username/:postid
router.put("/:username/:postid", async function(req, res) 
{
    let { username, postid } = req.params;
    let { title, body } = req.body; 

    // check if the required parameters are supplied
    if(title === undefined || body === undefined)
    {
        res.status(400).send("400 Bad Request: request does not contain parameters title and/or body");
        return;
    }
    
    // check if postid is valid
    if(/^-?\d+$/.test(postid))
    {
        postid = parseInt(postid, 10);
    }
    else
    {
        res.status(400).send("400 Bad Request: the entered postid is invalid");
        return;
    }

    // AUTHENTICATE USER WITH COOKIE

    // go to database
    mongoConn.getDb(async function(db)
    {  
        // check if post already exists in the database
        let exists = await db.collection("Posts")
            .findOne({"username":username, "postid":postid});
        
        // post doesn't exist
        if(exists === null)
        {
            res.status(400).send("400 Bad Request: username and/or postid was not found in the database");
            return;
        }

        // post exists, so update it
        let currentTime = Date.now();
        await db.collection("Posts").updateOne({
            "username": username,
            "postid": postid
        },
        { $set:
            {
                "modified": currentTime, 
                "title": title, 
                "body": body
            }
        });

        res.status(200).send("200 OK: successfully updated the record in database");
    });
});

// DELETE /api/:username/:postid
router.delete("/:username/:postid", async function(req, res) 
{
    let { username, postid } = req.params;
    
    // check if postid is valid
    if(/^-?\d+$/.test(postid))
    {
        postid = parseInt(postid, 10);
    }
    else
    {
        res.status(400).send("400 Bad Request: the entered postid is invalid");
        return;
    }

    // TODO: AUTHENTICATE USER WITH COOKIE

    // find post in database
    mongoConn.getDb(async function(db)
    {
        // check if post already exists in the database
        let exists = await db.collection("Posts")
            .findOne({"username":username, "postid":postid});
        
        // post doesn't exist
        if(exists === null)
        {
            res.status(400).send("400 Bad Request: username and/or postid was not found in the database");
            return;
        }

        // post exists, so delete it
        await db.collection("Posts")
            .deleteOne({
                "username":username,
                "postid":postid
            });

        res.status(204).send();
    });
});

module.exports = router;