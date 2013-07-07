var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 var buffer = new Buffer(100); 
 buffer.write(fs.readFileSync("index.html","utf8"),"utf8");
 
 response.send(buffer.toString("utf8", 0, 28));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
