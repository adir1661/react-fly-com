const aws = require('aws-sdk');
const responses = require('../helper/response');
const base64ArrToBucket = require("../helper/image").base64ArrToBucket;
const s3Bucket = new aws.S3({
    params:
        {
            Bucket: 'sis-flycomm-images',
        }
});

// console.log(s3Bucket.endpoint.href);
// console.log(s3Bucket);
exports.site = function (event, context, callback) {
    console.log('upload image !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

    let body;
    try {
        body = JSON.parse(event.body);
    } catch (e) {
        console.log('data recieved on upload image, body: ', event.body, '\n event', event);
        body = event;
    }
    base64ArrToBucket(s3Bucket, body.gallery, body.fileName).then(respone => {
        console.log("uploads response ==>", respone);
        return callback(null, respone);
    }).catch((error) => {
        console.log("upload image error >>>>>>>: ", error);
        callback(responses.responseError(error));
    });
};