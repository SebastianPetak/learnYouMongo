var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var lowAge = process.argv[3]

mongo.connect(url, function(e, db) {
	if (e) throw e
	parrots = db.collection('parrots')
	
})
