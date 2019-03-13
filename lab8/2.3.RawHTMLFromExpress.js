var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.set('Content-Type', 'text/html');
    res.send(new Buffer('<h1>The Root Route</h1>'));
})

app.get('/hello', function (req, res) {
    res.set('Content-Type', 'text/html');
    res.send(new Buffer('<h2>The Hello Route</h2>'));
})

app.get('/goodbye', function (req, res) {
    res.set('Content-Type', 'text/html');
    res.send(new Buffer('<p>The <b>Goodbye</b> route</p>'));
})

var server = app.listen(5000, "127.0.0.1", function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Listening on http://%s:%s", host, port)
})
