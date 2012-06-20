var sw = require("../site-words");
var express = require("express");

var app = express.createServer();

app.get("/", function(req, res) {
	res.json(sw.getWord());
});

app.listen(8080);