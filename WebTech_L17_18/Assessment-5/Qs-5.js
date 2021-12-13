var express = require('express');
const path = require('path');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'Qs-5.html'));
});

app.post('/submitform', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    res.send(name + ' POSTed!!!');
});

app.put('/updatedata', function (req, res) {
    res.send('PUT Request');
});

app.delete('/deletedata', function (req, res) {
    res.send('DELETE Request');
});

app.listen(4200, () => {
    console.log('Running...');
});