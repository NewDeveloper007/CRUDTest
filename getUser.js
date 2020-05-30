var AWS = require('aws-sdk');
var myDB = require("./lib/dynamodb-lib");
var myResponse = require("./lib/handler-lib");
var finalresp;

exports.read = (event, context, callback) => {
  if(event == ""){
    console.log("input is null");
    return;
  }

  else {
    var inputdata = event.queryStringParameters;
    }


  var params = {
    TableName: process.env.tableName,
    Key: {
        'UserId': {"S": inputdata.id},
        'FirstName' : {"S" : inputdata.name}
    }
  };

    myDB.myDbGET(params, function(dbresponse){
        finalresp = myResponse.ResponseHandler(dbresponse);
        callback(null, finalresp);
    });  
};