var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
    if (err) throw err;

    var dbo = db.db("mydb");

    var sort = { name: -1 };

    dbo.collection("users").find().sort(sort).toArray(function (err, result) {
        if (err) throw err;

        console.log(result);
        db.close();
    });
});