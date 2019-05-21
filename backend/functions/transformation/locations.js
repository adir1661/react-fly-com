var aws = require('aws-sdk');
const responses = require('../helper/response');
const lambda = new aws.Lambda({
    // region: process.env.REGION
});
let GetSites = function (event, context, callback) {
    try {
        lambda.invoke({
                FunctionName: 'sis-flycomm-dev-site-list',
                Payload: '{"key":"rrr"}' // pass params
            },
            function (error, data) {
                //console.log(data.Payload);
                let dataObj = JSON.parse(data.Payload);
                //console.log('function');
                if (error) {
                    console.log('error', error);
                    return callback('error');

                }
                let isBody = !!(dataObj ? dataObj.body : false);
                if (isBody) {
                    //context.succeed(data.Payload)
                    //console.log('inside', dataObj.body);
                    return callback(null, dataObj.body);
                }
                console.log('outside', dataObj);
                callback(null, dataObj);

            });
    }
    catch (e) {
        console.log('error ', e);
        callback(e);
    }
};

exports.list = function (event, context, callback) {
    GetSites(event, context, function (err, data) {
        if (err) return callback(responses.responseError(err));
        console.log('lambda: ', JSON.parse(data));
        let sites = JSON.parse(data).map((site, i) => {
            return {
                id: site._id,
                title: site.provAntennaId,
                latitude: site.location ? site.location.lat : "",
                longitude: site.location ? site.location.lng : '',
                marker_image: site.marker_image,
                marker_color: '',
                address: site.address,
                description: site.description,
                type: site.type,
                created:site.created,
                contact:site.contact,
            }
        });
        callback(null, responses.responseOk(sites));
    });
};