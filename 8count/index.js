var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo';
var lowage = process.argv[2];

mongo.connect(url, function(e, db) {
    if (e) throw e
    var collection = db.collection('parrots');
    collection.count({
	age: {$gt: +lowage}
    }, function(e, count) {
	if (e) throw e
	console.log(count);
	db.close()
    })
})
