var AWS = require('aws-sdk');
var myDB = require("./lib/dynamodb-lib");
var myResponse = require("./lib/handler-lib");
var finalresp;

exports.create = (event, context, callback) => {
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
        'FirstName': {"S": inputdata.FirstName},
        'LastName': {"S" : inputdata.LastName},
        'Address': {"M" : event.requestcontext.Address},
        'callid' : {"S" : event.callid}
    },
     ConditionExpression : 'attribute_not_exists(UserId)'
  };

    myDB.myDbPUT(params, function(dbresponse){
        finalresp = myResponse.ResponseHandler(dbresponse);
        callback(null, finalresp);
    });  
};
