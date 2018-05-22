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

// ROUTER
// var lists = require('./route/list')(app);
// app.use('/list', lists);

app.get('/list', function(req, res){
  var sql = 'SELECT FROM list'
  db.query(sql).then(function(list){
    res.render('list', {lists:list});
  });
});
app.get('/login', function(req, res){
  res.render('login');
});


///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

app.get('/add', function(req, res){
  res.render('add');
});
app.post('/add', function(req, res){
  var title = req.body.title;
  var description = req.body.description;
  var author = req.body.author;
  var sql = 'INSERT INTO list (title, description, author) VALUES(:title, :desc, :author)';
  db.query(sql, {
    params:{
      title:title,
      desc:description,
      author:author
    }
  }).then(function(results){
      res.redirect('/list');
  });
});
app.get('/bootstr', function(req, res){
  res.render('bootstr');
});
app.get('/count', function(req, res){
  res.cookie('count', 1);
  var count_val = 'count : '+ req.cookies.count;
  res.render('count', {count_val});
});
app.get('/', function(req, res){
  res.render('index');
});

// WEB_LISTEN
app.listen(3000, function(){
  console.log('Connected to 3000 port');
});
