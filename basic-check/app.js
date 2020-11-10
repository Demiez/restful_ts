const http = require('http');
const _ = require('lodash');

http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
    });

    let randomValue = _.random(15, 20);

    res.end(`Server is up and running, random number is ${randomValue}`);
  })
  .listen(5000);

console.log('Server has started at localhost:5000');
