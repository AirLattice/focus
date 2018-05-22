var express = require('express');
var bodyparser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var app = express();
var upload = multer({dest:'uploads/'});
app.use(bodyparser.urlencoded({ extended: false }));
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;


// OrientDB Connection
var OrientDB = require('orientjs');
var server = OrientDB({
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: 'jin85200++'
});

var db = server.use('focusmusic');
var sql = 'SELECT FROM topic';
db.query(sql).then(function(topics){
});

// ROUTER

app.get('/add', function(req, res){
  res.render('add');
});
app.post('/add', function(req, res){
  var title = req.body.title;
  var description = req.body.description;
  var author = req.body.author;
  var sql = 'INSERT INTO topic (title, description, author) VALUES(:title, :desc, :author)';
  db.query(sql, {
    params:{
      title:title,
      desc:description,
      author:author
    }
  }).then(function(results){
      res.redirect('/'+encodeURIComponent(results[0]['@rid']));
  });
});


app.get('/:id/edit', function(req, res){
  var sql = 'SELECT FROM topic';
  var id = req.params.id;
  db.query(sql).then(function(topics){
    var sql = 'SELECT FROM topic WHERE @rid=:rid';
    db.query(sql, {params:{rid:id}}).then(function(topic){
      res.render('edit', {topics:topics, topic:topic[0]});
    });
  });
});
app.post('/:id/edit', function(req, res){
  var sql = 'UPDATE topic SET title=:t, description=:d, author=:a WHERE @rid=:rid';
  var id = req.params.id;
  var title = req.body.title;
  var desc = req.body.description;
  var author = req.body.author;
  db.query(sql, {
    params:{
      t:title,
      d:desc,
      a:author,
      rid:id
    }
  }).then(function(topics){
    res.redirect('/'+encodeURIComponent(id));
  });
});
app.get('/:id/delete', function(req, res){
  var sql = 'SELECT FROM topic';
  var id = req.params.id;
  db.query(sql).then(function(topics){
    var sql = 'SELECT FROM topic WHERE @rid=:rid';
    db.query(sql, {params:{rid:id}}).then(function(topic){
      res.render('delete', {topics:topics, topic:topic[0]});
    });
  });
});
app.post('/:id/delete', function(req, res){
  var sql = 'DELETE FROM topic WHERE @rid=:rid';
  var id = req.params.id;
  db.query(sql, {
    params:{
      rid:id
    }
  }).then(function(topics){
    res.redirect('/');
  });
});
app.get(['/', '/:id'], function(req, res){
  var sql = 'SELECT FROM topic';
  db.query(sql).then(function(topics){
    var id = req.params.id;
    if(id){
      var sql = 'SELECT FROM topic WHERE @rid=:rid';
      db.query(sql, {params:{rid:id}}).then(function(topic){
        res.render('view_orientdb', {topics:topics, topic:topic[0]});
      });
    } else{
      res.render('view_orientdb', {topics:topics});
    }
  });
});

app.listen(3000, function(){
  console.log('Connected to 3000 port');
});
