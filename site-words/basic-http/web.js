var sw = require("../site-words");
var http = require("http");
							
http.createServer(function(req, res) {
		res.writeHeader(200, { "Content-Type" : "application/json" });
		res.end(JSON.stringify(sw.getWord()));
}).listen(8080, "0.0.0.0");