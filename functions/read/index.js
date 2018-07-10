console.log('starting function')

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region : "ap-northeast-2"});


exports.handle = function(e, ctx, cb) {

  /*
  let scanningParameter = {
    TableName : 'Content',
    Limit : 100
  };

  docClient.scan(scanningParameter, function(err, data){  ///IAM Lambdb Function user have scan permission
    if(err){
      cb(err, null);
    }else{
      cb(null, data);
    }
  });
*/

var params = {
  TableName : 'Content',
  Key : {
    "contentKey":"1234598778"
  }
}

docClient.get(params, function(err, data){  //IAM Lambdb Function user have get permission
  if(err){
    cb(err, null);
  }else{
    cb(null, data);
  }
});

  console.log('processing event: %j', e)
}
