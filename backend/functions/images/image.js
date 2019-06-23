const aws = require('aws-sdk');
const responses = require('../helper/response');
const base64ArrToBucket = require("../helper/image").base64ArrToBucket;
const s3Bucket = new aws.S3({
    params:
        {
            Bucket: 'sis-flycomm-images',
            secretAccessKey: process.env.SECRET_ACCESS_KEY,
            accessKeyId: process.env.ACCESS_KEY_ID
        }
});

// console.log(s3Bucket.endpoint.href);
// console.log(s3Bucket);
exports.site = function (event, context, callback) {
    console.log('upload image !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

    let body;
    try{
        body = JSON.parse(event.body);
    }catch (e) {
        callback(e);
    }
    base64ArrToBucket(s3Bucket, body.gallery,body.fileName).then(respone => {
        console.log("uploads response ",respone)
        callback(null, responses.responseOk(respone));
    }).catch((error) => {
        console.log("upload image error >>>>>>>: ",error);
        callback(responses.responseError(error));
    });
};