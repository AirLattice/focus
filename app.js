// Application Require & Other
var express = require('express');
var bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: '123455kasldfk324lk23l4k@#$2#4',
  resave: false,
  saveUninitialized: true
}));
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

var list = require('./routes/list')(app, db);
app.use('/list', list);

var login = require('./routes/login')(app);
app.use('/login', login);

var add = require('./routes/add')(app);
app.use('/add', add);






// app.get('/bootstr', function(req, res){
//   res.render('bootstr');
// });
// app.get('/count', function(req, res){
//   res.cookie('count', 1);
//   var count_val = 'count : '+ req.cookies.count;
//   res.render('count', {count_val});
// });
// app.get('/', function(req, res){
//   res.render('index');
// });

// WEB_LISTEN
app.listen(3000, function(){
  console.log('Connected to 3000 port');
});
