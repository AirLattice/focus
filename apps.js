var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;
// OrientDB
var OrientDB = require('orientjs');
var server = OrientDB({
  host: '10.10.10.3',
  port: 2424,
  username: 'root',
  password: 'jin85200--'
});
var db = server.use('focus');


var p1 = express.Router();
p1.get('', function(req, res){
  res.send('p1');
});
app.use('/p1', p1)

var p2 = express.Router();
p2.get('/', function(req, res){
  res.send('p2');
});
app.use('/p2', p2)

// WEB_LISTEN
app.listen(3000, function(){
  console.log('Connected to 3000 port');
});
