var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('water', server);
 
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'water' database");
        db.collection('history', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'history' collection doesn't exist.");
            }
        });
    }
});

exports.db = db;
exports.Server = Server;
exports.BSON = BSON;
exports.mongo = mongo;