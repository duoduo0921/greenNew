var express = require('express');
var app = express();
var path = require('path');
var server = require('http').Server(app);

app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname));
app.use("/images", express.static(__dirname + '/images'));
app.use("/scripts", express.static(__dirname + '/scripts'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});

// add other routes below
app.get('/events', function (req, res) {
    res.sendFile(path.join(__dirname + 'events.html'));
});

app.get('/map', function (req, res) {
    res.sendFile(path.join(__dirname + 'map.html'));
});

app.get('/post', function (req, res) {
    res.sendFile(path.join(__dirname + 'post.html'));
});

// app.listen(process.env.PORT || 8080, function () {
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });

var port = process.env.PORT || 8080;
server.listen(port, function() {
    console.log("App is running on port " + port);
});