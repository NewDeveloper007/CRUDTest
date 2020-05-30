var AWS = require('aws-sdk');

var dynDB = new AWS.DynamoDB();
var response;

exports.myDbPUT = (params, callback) => {
    
    dynDB.putItem(params, function(error, data){
        if (error) {
            response = {
            "statuscode" : 500,
            "body": JSON.stringify({ status: error })
            };
        } 
        else{
            response = {
            "statuscode" : 200,
            "body": JSON.stringify(params.Item)
            };
        }
        callback(response);
    });
};

exports.myDbGET = (params, callback) => {
    
    dynDB.getItem(params, function(error, data){
        if (error) {
            response = {
            "statuscode" : 500,
            "body": JSON.stringify({ status: error })
            };
        } 
        else{
            response = {
            "statuscode" : 200,
            "body": JSON.stringify(data)
            };
        }
        callback(response);
    });
};
