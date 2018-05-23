// Application Require & Other
var express = require('express');
var bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var app = express();
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: '123455kasldfk324lk23l4k@#$2#4',
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}));
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;

// OrientDB
var db = require('./config/orientdb')(app);


// ROUTER Modules
var list = require('./routes/list')(app, db);
app.use('/list', list);

var login = require('./routes/login')(app, session);
app.use('/auth/login', login);

var add = require('./routes/add')(app, db);
app.use('/add', add);


// ROUTER

app.get('/auth/logout', function(req, res){
  delete req.session.displayName;
  res.redirect('/welcome');
});
app.get('/welcome', function(req, res){
  if(req.session.displayName){
    res.send(`
      <h1>Hello, ${req.session.displayName}</h1>
      <a href='/auth/logout'>Logout</a>
    `);
  } else {
    res.send(`
      <h1> Welcome </h1>
      <a href='/auth/login'>Login</a>
    `);
  }
});


app.get('/', function(req, res){
  res.render('index');
});

// WEB_LISTEN
app.listen(3000, function(){
  console.log('Connected to 3000 port');
});
