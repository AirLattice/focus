///////////////////////////////////////////////////
//
//  1.OrientDB 모듈 호출
//  2.OrientDB 접속 변수 생성
//  3.OrientDB DB 선택
//
//
///////////////////////////////////////////////////
//  1.OrientDB 모듈 호출
var OrientDB = require('orientjs');
//  2.OrientDB 접속 변수 생성
var server = OrientDB({
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: '111111'
});
//  3.OrientDB DB 선택
var db = server.use('o2');
///////////////////////////////////////////////////

// 예제 : [회원명, 노래제목, 장르 ] 추가
db.query("INSERT INTO topic(title, song_title, genre, url) VALUES(:title, :stitle, :genre, :url)", {
  params:{
    title:'A_woman',
    stitle:'In the night',
    genre:'Jazz',
    url:'http://streamserver.com/1855323.mp3'
  }}).then(function(results){
    console.log(results);
  });



/*
var sql = 'SELECT FROM topic WHERE @rid=:rid';
var param = {
  params:{
    rid:'#18:0'
  }
};
db.query(sql, param).then(function(results){
  console.log(results);
});
var sql = "INSERT INTO topic(title, description) VALUES(:title, :desc)";
db.query(sql, {
  params:{
    title:'Jquery',
    desc:'Jquery is not ...'
  }
}).then(function(results){
  console.log(results);
});
var sql = 'UPDATE topic SET title=:title WHERE @rid=:rid';
db.query(sql, {params:{title:'Expressjs', rid:'#20:0'}}).then(function(results){
  console.log(results);
});
var sql = 'DELETE FROM topic WHERE @rid=:rid';
db.query(sql, {params:{rid:'#20:0'}}).then(function(results){
  console.log(results);
});
*/
