var crypto= require('crypto');

//var sha=crypto.createHash('sha256').update('deepa').digest('hex');
//console.log(sha);

//var sha1=crypto.createHash('sha256').update('deepa').digest('base64');
//console.log(sha1);

//var user={
  //  firstname:"deepa",
  //  lastname:"blocky",
  //  role:"admin"
//};

//var x=crypto.createHash('sha256').update(JSON.stringify(user)).digest('hex')
 //crypto.createHash('sha256')console.log(sha256(user))
 //console.log(x);
 var blockchain=[];

 var block={
     data:{
        firstname:"deepa",
        lastname:"blocky",
        role:"admin"
 }};
 var y=crypto.createHash('sha256').update(JSON.stringify(block.data)).digest('hex');
 block.hash=y;
 //console.log(block)
 block.prehash=0;
 blockchain.push(block);

 

 var block1=
         {
              data:{
              firstname:"diya",
              lastname:"ram",
              role:"admin"
}};

var z=crypto.createHash('sha256').update(JSON.stringify(block1.data)).digest('hex');
block.hash=z;
block1.prehash=blockchain[0].hash;
blockchain.push(block1);
console.log(blockchain);

 

 

