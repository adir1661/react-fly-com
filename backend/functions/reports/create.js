'use strict';
const connectToDatabase = require('../helper/db_connection');
let SiteSchema = require('../models/site');
const responses = require('../helper/response');


function createSite(siteObj,reportObj) {
    console.log('=> query database');
    return siteObj.save()
        .then((site) => {
            return responses.responseOk(site);
        })
        .catch(err => {
            console.log('=> an error occurred: ', err);
            return responses.responseError(500,err);
        });
}

module.exports.create = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    let {name, address, location, provAntennaId, description, type,contact,created,marker_image} = JSON.parse(event.body);
    console.log('event: ', event);
    connectToDatabase()
        .then((dbConn) => {
            let Site  = dbConn.model('Site', SiteSchema);
            let site = new Site({
                contact,
                name,
                address,
                location,
                provAntennaId,
                description,
                type,
                marker_image,
                created,
            });
            return createSite(site)})
        .then(response => {
            console.log('=> returning result: ', response);
            callback(null, response);
        })
        .catch(err => {
            console.log('=> an error occurred: ', err);
            callback(err);
        });
};