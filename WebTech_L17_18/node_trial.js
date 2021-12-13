var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('lists.html', function (err, data) {
        if (err) {
            console.log(err.stack);
            return;
        }
        console.log(data);
        res.write(data);
        // res.end(data);
        res.end('Hello and Welcome!!!');
    });
}).listen(8080);