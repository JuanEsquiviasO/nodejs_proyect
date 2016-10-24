'use strict';

const http = require('http').createServer();

function webServer(req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end('<h1>Node.js on the web as an issuer of events</h1>');
}

http
  .on( 'request', webServer )
  .on( 'error', err => console.log('An error occurred: ', err.message) )
  .listen( 3000, 'localhost', () => console.log('Server running on http://localhost:3000/') );