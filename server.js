/*
GTBILT, S.A.
Guatemala City, Guatemala
Created by Rigoberto Acifuina
January, 2017
*/

/*
Static content server for the privacy policy.
*/

var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');
var HTTP_PORT = process.env.PORT || 8080;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(HTTP_PORT);
