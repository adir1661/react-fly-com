'use strict';
var aws = require('aws-sdk');
const connectToDatabase = require('../helper/db_connection');
let SiteSchema = require('../models/site');
const responses = require('../helper/response');

const lambda = new aws.Lambda({});

function createSite(siteObj) {
    console.log('=> query database Site List');
    return siteObj.save()
        .then((site) => {
            return (site);
        })
}

module.exports.create = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    let {name, address, location, provAntennaId, description, type, contact, created, gallery} = JSON.parse(event.body);
    let SiteRef;
    // console.log('event: ', event);
    connectToDatabase()
        .then((dbConn) => {
            let Site = dbConn.model('Site', SiteSchema);
            let site = new Site({
                contact,
                name,
                address,
                location,
                provAntennaId,
                description,
                type,
                created,
            });
            return createSite(site)
        })
        .then(response => {
            SiteRef = response;
            // console.log('=> returning result: ', response);
            return new Promise((resolve, reject) => {
                lambda.invoke({
                    FunctionName: 'sis-flycomm-dev-upload-image',
                    Payload: JSON.stringify({gallery, fileName: 'sites/Site'}) // pass params
                }, function (error, data) {
                    if (error) {
                        console.log('error on invokation!', error);
                        return reject(error)
                    } else {
                        resolve(data);
                    }
                })
            });
        })
        .then((invokationResopnse) => {
            console.log("GalleryUrls Response:>>>>>>>  ", galleryUrls);
            let galleryS3 = JSON.parse(invokationResopnse.Payload);
            SiteRef.gallery = galleryS3.map(item=>item.url);
            SiteRef.marker_image = galleryS3.map(item=>item.url)[0];
            return SiteRef.save();
        })
        .then((site) => {
            console.log(site);
            callback(null, responses.responseOk(site));
        })
        .catch(err => {
            console.log('=> an error occurred: ', err);
            callback(responses.responseError(err));
        });
};