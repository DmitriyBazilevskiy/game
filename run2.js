const http = require('http');

const host = '192.168.0.107';
const port = 7000;

const fs = require('fs');

function notFound(res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not found\n');
};

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET': {
      switch (req.url) {
        case '/home': {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Home page\n');
          break;
        };
        case '/about': {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end('About page\n');
          break;
        };
        case '/game': {
          res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});

          var myReadShort = fs.createReadStream(__dirname + '/index.html');

          myReadShort.pipe(res);

          // fs.readFile('style.css', (err, data) => {
          //     if (err) throw err;
          //
          //     res.writeHead(200, {'Content-Type' : 'text/css'});
          //     var css = fs.createReadStream(__dirname + '/style.css');
          //
          //     css.pipe(res);
          //
          // });

          break;
        };
        default: {
          console.log('popalo4');
          notFound(res);
          break;
        };
      };

      break;
    };
    case 'POST': {
      switch (req.url) {
        case '/api/admin': {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Create admin request\n');
          break;
        };
        case '/api/user': {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Create user request\n');
          break;
        };
        default: {
          notFound(res);
          break;
        };
      };

      break;
    };
    default: {
      notFound(res);
      break;
    };
  };
});

server.listen(port, host, () => {
  console.log(`Server listens http://${host}:${port}`);
});
