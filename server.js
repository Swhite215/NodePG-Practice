var express = require('express');
//server module
var app = express();
var pg = require('pg');
//will parse through the data I am sending and receieving.
var bodyParser = require('body-parser');
//string to define connection to pg.
var connectionString = 'postgres://postgres:grandcircuspg@localhost:5432/postgres';
//creates client based on connection to pg.
var client = new pg.Client(connectionString);

var config = {
  user: 'postgres',
  database: 'postgres',
  password: 'grandcircuspg',
  host: 'localhost',
  port: 5432,
  max: 100,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);
// bodyParser converts to JSON and makes it accessible.
app.use(bodyParser.json({ extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/get-things', function(req, res, next) {
  var results = [];
  pg.connect(connectionString, function(err, client, done) {

    // client.query('INSERT INTO todo (todo) values($1)', ['swim']);

    var query = client.query('SELECT * FROM todo ORDER BY todo');

    query.on('row', function(row) {
      results.push(row);
    });

    query.on('end', function() {
      console.log(results);
      client.end();
      return res.json(results);
    });

  });
});
// Add a route for each CRUD command: GET, POST, PUT, DELETE



var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('PostgreSQL server running at http://localhost:%s', port);
});
