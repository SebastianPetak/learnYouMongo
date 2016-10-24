var mongo = require('mongodb').MongoClient;
var database = process.argv[2];
// var collection = db.collection(process.argv[3]);
var id = process.argv[4];

mongo.connect('mongodb://localhost:27017/' + database, function(e, db) {
    if (e) throw e
    var collection = db.collection(process.argv[3]);
    collection.remove({
	_id: id
    }, function(e) {
	if (e) throw e
	db.close()
    })
})
