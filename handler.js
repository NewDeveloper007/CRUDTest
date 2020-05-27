var AWS = require('aws-sdk');

exports.myhandler = (event, context, callback) => {
  if(event == ""){
    console.log("input is null");
    return;
  }
  else {
    var inputdata = JSON.parse(event.body);
    }

  var params = {
    TableName: process.env.tableName,
    Item: {
        'UserId': {"S": inputdata.UserId},
        'FirstName': {"S": inputdata.FirstName}
 //      LastName: inputdata.LastName,
 //       Address: event.Address
    },
     ConditionExpression : 'attribute_not_exists(UserId)'
  };

//  var dynDB = new AWS.DynamoDB.DocumentClient();
  var dynDB = new AWS.DynamoDB();

  dynDB.putItem(params, function(error, data){
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    };

    if (error) {
//        console.log(error);
        var response = {
          "isBase64Encoded": false,
          "statusCode": 500,
          "headers": {"my_header": "my_value"},
          "body": JSON.stringify({ status: error })
        };
//        console.log(response1);
        callback(null, response);
      } 

      var response = {
        "isBase64Encoded": false,
        "statusCode": 200,
        "headers": {"my_header": "my_value"},
        "body": JSON.stringify(params.Item)
      };
//      console.log(JSON.stringify(params));
      callback(null, response);
      
  });

};

