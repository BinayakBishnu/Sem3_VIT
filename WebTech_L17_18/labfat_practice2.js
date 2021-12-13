var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/labfat_practice2.html");
})
app.get('/get_example2', function (req, res) {
    res.send('<p>Username: ' + req.query['first_name'] + '</p><p>Lastname: ' + req.query['last_name'] + '</p>');
})
app.listen(8000, function () {
    console.log("Running...");
})
