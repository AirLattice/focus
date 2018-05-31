const request = require('request');
const timestamp = require('time-stamp');

var tstamp = timestamp('ms');
console.log(tstamp);
// const options = {
//     url: 'http://restapi.fs.ncloud.com/focusfs/text.txt',
//     method: 'GET',
//     headers: {
//         'oauth_consumer_key': 'CZ9VHQDDUjWBPvLvFWIx',
//         'oauth_signature_method':'HMAC-SHA1 ',
//         'oauth_version': '1.0',
//         'oauth_timestamp': '${tstamp}',
//         'oauth_nonce': 'W4SkWT',
//         'oauth_signature': 'c7pJPaJnEMvbUs2OCHougGVN0jfGY1hvGPRjtVkc'
//     }
// };
//
// request(options, function(err, res, body) {
//     var json = JSON.parse(body);
//     console.log(json);
// });
