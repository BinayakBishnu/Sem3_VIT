var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: true });

var MongoClient = require('mongodb').MongoClient;

app.use(express.static(__dirname + "/"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/labfat_practice1.html");
})

app.post('/process_post', urlencodedParser, function (req, res) {
    response = {
        CompanyID: req.body.cid,
        name: req.body.cname,
        address: req.body.caddr,
    };

    MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
        if (err) throw err;
        console.log("Connected to Database");
        var dbo = db.db("mydb");
        dbo.collection('customers').insertOne(response, function (err, result) {
            if (err) throw err;
            console.log("1 document inserted in your mongodb database");
        });
    });

    console.log(response);
    res.end("<h1>"+JSON.stringify(response)+"</h1>");
})

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s//register", host, port)
})
