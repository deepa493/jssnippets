var crypto= require('crypto');
var sha=crypto.createHash('sha256').update('deepa').digest('hex');
console.log(sha);