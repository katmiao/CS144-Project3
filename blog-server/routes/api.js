let express = require('express');
let router = express.Router();
let mongoConn = require("../mongoConn");

// GET /api/:username
router.get("/:username", async function(req, res) {
    console.log("issued a get request to /api/username SOME CHANGE")
});

module.exports = router;