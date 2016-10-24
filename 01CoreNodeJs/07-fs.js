'use strict';

const http = require('http').createServer(webServer),
  fs = require('fs');

function webServer(req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});
  fs.readFile( './assets/index.html', (err, data) => (err) ? console.log(err.message) : res.end(data) );
}

http.listen( 3000, 'localhost', () => console.log('Server running on http://localhost:3000/') );

// waiting 55:34