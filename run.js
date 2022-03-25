

const fs = require('fs');
//подключение к локальному серверу
var http = require('http');

var server = http.createServer(function(req, res) {

    console.log('url ' + req.url);

    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});

    var myReadShort = fs.createReadStream(__dirname + '/index.html');
    myReadShort.pipe(res);

    // if (req.url.endsWith('.css')) {
    //   fs.readFile('style.css', (err, data) => {
    //       if (err) throw err;
    //       console.log(res._header);
    //       //console.log(res);
    //       res._header['Content-Type', 'text/css'];
    //       console.log(res._header);
    //       console.log('popalo');
    //       res.statusCode = 200;
    //       //res.setHeader('Content-Type', 'text/css');
    //       res.write(data);
    //       res.end();
    //
    //   });
    // };

});

port = 5000;

server.listen(port, '192.168.0.107');
console.log('Порт ' + port);
