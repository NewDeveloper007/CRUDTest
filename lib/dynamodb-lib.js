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

/*
function deepsleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function sleep(t) {
    console.log('Taking a break...');
    await deepsleep(t);
    console.log('Two seconds later, showing sleep in a loop...');
    }
};
*/