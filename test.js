var express = require('express');
var request = require("request-promise");
var qs = require('querystring');
var timestamp = require('time-stamp');
var app = express();
const options = {
  method: 'GET',
  uri: 'https://restapi.fs.ncloud.com/focusfs/text.txt',
  Authentication: {
    oauth_consumer_key:'CZ9VHQDDUjWBPvLvFWIx',
    oauth_timestamp: timestamp('YYYYMMDDmmss'),		
    oauth_nonce: 'X986FGW#',
    oauth_version: '1.0',
    oauth_signature_method: 'HMAC-SHA1',
    json: true
  }
}

request(options, function (error, response, body) {
  console.log('error:', error); 
  // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); 
  // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

// WEB_LISTEN
app.listen(3000, function(){
  console.log('Connected to 3000 port');
});
