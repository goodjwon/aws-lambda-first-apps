console.log('starting function')


const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region : "ap-northeast-2"});

exports.handle = function(e, ctx, callback) {

  var params = {
    Item : {
      contentKey: e.contentKey,
      date: Date.now(),
      message : e.message
    },
    TableName : 'Content'
  };

  docClient.put(params, function(err, data){
    if(err){
      callback(err, null);
    }else{
      callback(null, data);
    }
  });

  console.log('processing event: %j', e)
}
