var mongo = require('mongodb').MongoClient;
var firstName = process.argv[2];
var lastName = process.argv[3];
var url = 'mongodb://localhost:27017/learnyoumongo';

var jsondata = {
    'firstName': firstName,
    'lastName': lastName
};

mongo.connect(url, function(e, db) {
    if (e) throw e
    var users = db.collection('users')
    users.insert(jsondata, function(e, data) {
	if (e) throw e
	console.log(JSON.stringify(jsondata));
	db.close()
    })
})
