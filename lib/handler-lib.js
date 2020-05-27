
exports.ResponseHandler = (dbresponse) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    };

    var response = {
    "isBase64Encoded": false,
    "statusCode": dbresponse.statuscode,
    "headers": {"my_header": "my_value"},
    "body": dbresponse.body
    };
    
    return response;
};