let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

const secretKey = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c"

function authenticateUser(token)
{
    if(!token)
    {
        return false;
    }
    try
    {
        let decoded = jwt.verify(token, secretKey, { algorithms: ["HS256"]});
        let username = decoded.usr;
        return username;
    } 
    catch(err)
    {
        console.log(err.message);
        return false;
    }
}

router.get('/*', async function(req, res, next) 
{
    const token = req.cookies["jwt"];
    let redirect = "/login?redirect=/editor/";
    let username = authenticateUser(token);
    if (!username)
    {
        console.log("--- unauthenticated. redirecting");
        res.redirect(redirect);
    }
    else 
    {
        console.log("--- authenticated for username=" + username);
        next();
    }
    
})

module.exports = router;