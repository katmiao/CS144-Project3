const assert = require('assert');
let MongoClient = require('mongodb').MongoClient;

// Use '192...' if using Docker toolbox, 'localhost' if not
const MONGODB_URI = 'mongodb://192.168.99.100:27017/BlogServer';
//const MONGODB_URI = 'mongodb://localhost:27017/BlogServer';

let db;

module.exports = {
    initDbConn: function(callback) 
    {
        // Initialize connection once, reuse the database object 
        MongoClient.connect(MONGODB_URI, { useUnifiedTopology: true }, function(err, client) {
            assert.equal(null, err);
            db = client.db("BlogServer");
            db.collection("Posts").createIndex({"postid": 1});
            console.log("Initialized MongoDB connection.");
            return callback(err);
        });
    },
    getDb: function(callback) 
    {
        return callback(db);
    }
}
