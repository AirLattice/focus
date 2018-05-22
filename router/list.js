var express = require('express');
var router = express.Router();

router.get('/list', function(req, res){
  var sql = 'SELECT FROM list'
  db.query(sql).then(function(list){
    res.render('list', {lists:list});
  });
});

module.exports = router;
