var express = require('express');
var app = express();
// Add Node-PG + bodyParser

// Add config bodyParser
app.use(express.static(__dirname + '/public'));


// Add a route for each CRUD command: GET, POST, PUT, DELETE



var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('PostgreSQL server running at http://localhost:%s', port);
});
