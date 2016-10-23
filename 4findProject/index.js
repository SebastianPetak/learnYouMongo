var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var lowAge = process.argv[2]

mongo.connect(url, function(e, db) {
    if (e) throw e
    var parrots =  db.collection('parrots')
    parrots.find({
	age: { $gt: +lowAge } // +lowAge ensures it's a number
    }, {
	name: 1,
	age: 1,
	_id: 0
    }).toArray(function(e, documents) {
	console.log(documents)
    })
    db.close()
})
