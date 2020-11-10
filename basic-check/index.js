const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
    });

    res.end('Server is up and running');
  })
  .listen(5000);

console.log('Server has started at localhost:5000');
