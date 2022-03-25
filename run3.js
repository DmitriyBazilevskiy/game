const express = require('express');
const app = express();

const host = '192.168.0.107';
const port = 7000;

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

function isEmpty(obg) {
  var result = false;
  for (key in obg) {
      result = true;
      break;
  }
  return result;
}

// app.use(
//   '/uploads',
//   express.static(`${__dirname}/assets/images`)
// );
//app.use('/styles', express.static(`${__dirname}/css`));

app.use('/game', express.static(__dirname));


//app.get('/game/best_time.json', (req, res) => res.json({ time: '100'}));

app.get('/game/best_time.json', function(req, res) {

  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('base.sqlite');

  db.all("SELECT time FROM best_time", function(err, rows) {

        //  console.log(err);

          if (rows == undefined) {
              time = 0;
              console.log('ploxo');
          } else {
              if (rows.length < 1) {
                  time = 0;
              }
              rows.forEach(function (row) {
                  console.log(row.time);
                  time = row.time;
              });
          };

          db.close();

          res.json({ time: `${time}`});

  	});

});

app.post('/game/insert_best_time.json', jsonParser, function(req, res) {

    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('base.sqlite');

    //console.log(req.body.value);
    var time = req.body.value;

    db.all(`INSERT into best_time(time)values(${time})`, function(err) {

        db.close();

        if (err) {
            console.log(err.message);
            res.send('POST request (nit ok))');
        } else {
            console.log(time);
            console.log('POST insert_best_time');
            res.send('POST request (ok))');
        };

    });

});

app.post('/game/update_best_time.json', jsonParser, function(req, res) {

    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('base.sqlite');

    //console.log(req.body.value);
    var time = req.body.value;

    db.all(`UPDATE best_time SET time = ${time}`, function(err) {

        db.close();

        if (err) {
            console.log(err.message);
            res.send('POST request (nit ok))');
        } else {
            console.log(time);
            console.log('POST update_best_time');
            res.send('POST request (ok))');
        };

    });

});

// app.get('/game', (req, res) => {
//
//   console.log(1);
//   //res.sendFile(__dirname + "/index.html");
//
//
// });

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`);
});
