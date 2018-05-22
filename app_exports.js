// Application Require & Other
var express = require('express');
var bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieParser());
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

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

app.get('/', function(req, res){
  res.send('hi there are');
});


// WEB_LISTEN
app.listen(3000, function(){
  console.log('Connected to 3000 port');
});
