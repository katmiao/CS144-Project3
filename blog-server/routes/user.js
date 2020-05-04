var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

router.get('/', function(req, res, next) {
  res.render('user', { title: 'Express' });
});

module.exports = router;
