var crypto= require('crypto');

var sha=crypto.createHash('sha256').update('deepa').digest('hex');
console.log(sha);

var sha1=crypto.createHash('sha256').update('deepa').digest('base64');
console.log(sha1);
