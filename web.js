var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
// var buffer = new Buffer(10000); 
// buffer.write(fs.readFileSync("index.html","utf8"),"utf8");
 
// response.send(buffer.toString("utf8", 0, 28));
response.send(fs.readFileSync("index.html","utf8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
