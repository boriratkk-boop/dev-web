// server.js
const http = require('http');

http.createServer((req, res) => {
  res.end('Hello CI');
}).listen(3000, () => {
  console.log('App running on http://localhost:3000');
});
