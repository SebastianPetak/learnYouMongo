var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo'
var sizeArgv = process.argv[2];

mongo.connect(url, function(e, db) {
    if (e) throw e;
    var prices = db.collection('prices');
    prices.aggregate([
	{ $match: { size: sizeArgv }},
	{ $group: {
	    _id: 'total',
	    total: {
		$sum: '$value'
	    }
	}}
    ]).toArray(function(e, results) {
	if (e) throw e
	console.log(results)
	db.close()
    })
})
