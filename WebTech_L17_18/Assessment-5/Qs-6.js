var express = require('express');
const path = require('path');

var app = express();

var bodyParser = require('body-parser');

var u = bodyParser.urlencoded({
    extended: false
})
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'Qs-6.html'));
})
app.post('/signup', u, function (req, res) {
    var response = {
        username: req.body.username,
        password: req.body.password,
    };
    var usernameobj = {
        username: req.body.username,
    }

    var MongoClient = require('mongodb').MongoClient, format = require('util').format;
    MongoClient.connect('mongodb://127.0.0.1:27017/', function (err, db) {
        if (err) {
            throw err;
        }
        else {
            console.log("Connected");
        }
        var myDB = db.db("Qs-6");
        myDB.collection('users').findOne(usernameobj, function (err, result) {
            console.log(result);
            if (err) {
                throw err;
            }
            else if (result) {
                console.log(usernameobj.username + " already exists");
                res.sendFile(path.join(__dirname, 'Qs-6.html'));
            }
            else if (!result) {
                myDB.collection('users').insertOne(response, function (err, result) {
                    if (err) {
                        throw err;
                    }
                    else {
                        console.log("New account created");
                        console.log(response);
                        res.sendFile(path.join(__dirname, 'Qs-6b.html'));
                    }
                });
            }
        });
    });
})

app.post('/login', u, function (req, res) {
    var response = {
        username: req.body.username,
        password: req.body.password
    };
    var usernameobj = {
        username: req.body.username
    }
    var passwordobj = {
        password: req.body.password
    }
    var MongoClient = require('mongodb').MongoClient, format = require('util').format;
    MongoClient.connect('mongodb://127.0.0.1:27017/Qs-6', function (err, db) {
        if (err) {
            throw err;
        }
        console.log("Connected");
        var myDB = db.db("Qs-6");
        myDB.collection('users').findOne(usernameobj, function (err, result) {
            console.log(usernameobj);
            console.log(result);
            if (err) throw err;
            else if (!result) {
                console.log("No user found");
                res.sendFile(path.join(__dirname, 'Qs-6.html'));
            }
            else if (result) {
                myDB.collection('users').findOne(passwordobj, function (err, result2) {
                    if (err) {
                        throw err;
                    }
                    else if (!result2) {
                        console.log("Password is incorrect for " + response.username);
                        res.sendFile(path.join(__dirname, 'Qs-6.html'));
                    }
                    else if (result2) {
                        console.log(response.username + " logged in");
                        res.sendFile(path.join(__dirname, 'Qs-6b.html'));
                    }
                });
            }
        });
    });
    console.log(response);
})

app.listen(4200, () => {
    console.log('Running...');
});