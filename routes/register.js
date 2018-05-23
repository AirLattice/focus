module.exports = function(app, session, bodyparser){
  var express = require('express');
  var route = express.Router();
  var users = [
    {
      username: 'packman',
      password: '111',
      displayName: 'PACKMAN'
    }
  ];
  app.post('/auth/register', function(req, res){
    var user = {
      username: req.body.username,
      password: req.body.password,
      displayName: req.body.displayName
    };
    users.push(user);
    res.send(users);
  });
  app.get('/auth/register', function(req, res){
    res.render('register');
  });
  // var OrientDB = require('orientjs');
  // var server = OrientDB({
  // host: '10.10.10.3',
  // port: 2424,
  // username: 'root',
  // password: 'jin85200--'
  // });
  // var db = server.use('users');
  //
  // app.post('/auth/register', function(req, res){
  //   var username = req.body.username;
  //   var password = req.body.password;
  //   var displayName = req.body.displayName;
  //   var sql = 'INSERT INTO list (username, password, displayName) VALUES(:id, :pwd, :nick)';
  //   db.query(sql, {
  //     params:{
  //       id:username,
  //       pwd:password,
  //       nick:displayName
  //     }
  //   }).then(function(results){
  //       res.redirect('/welcome');
  //   });
  // });
  return route;
};
