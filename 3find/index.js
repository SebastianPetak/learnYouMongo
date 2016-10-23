var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var lowAge = process.argv[2]

mongo.connect(url, function(e, db) {
	if (e) throw e
	var parrots = db.collection('parrots')
	parrots.find({
		age: {
			$gt: +lowAge // $gt selects those documents where val of field > specified value
		}
}).toArray(function(err, docs) {
	if (err) throw err
	console.log(docs)
	db.close()
	})
})
