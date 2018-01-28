var express = require('express');
var app = express();


var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// configure a public directory to host static content
app.use(express.static(__dirname));

var port = process.env.PORT || 8080;

app.listen(port);
