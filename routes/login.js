module.exports = function(app){
  var express = require('express');
  var route = express.Router();
  app.post('/auth/login', function(req, res){
    var user = {
      username:'packman',
      password:'111',
      displayName:'PACKMAN'
    };
    var uname = req.body.username;
    var pwd = req.body.password;
    if(uname === user.username && pwd === user.password){
      req.session.displayName = user.displayName;
      res.redirect('/welcome');
    } else {
      res.send('<h1>Who are you?</h1><a href="/auth/login">login</a>');
    }
  });
  route.get('/auth/login', function(req, res){
    res.render('login');
  });
  return route;
};
