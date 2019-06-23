//'use strict';
let SiteSchema = require('../models/site');
const connectToDatabase = require("../helper/db_connection");
const reportSchema = require('../models/report');

exports.list = function (event, context, callback) {
    // Make sure to add this so you can re-use `conn` between function calls.
    // See https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas
    context.callbackWaitsForEmptyEventLoop = false;

    // Because `conn` is in the global scope, Lambda may retain it between
    // function calls thanks to `callbackWaitsForEmptyEventLoop`.
    // This means your Lambda function doesn't have to go through the
    // potentially expensive process of connecting to MongoDB every time.
    connectToDatabase()
        .then((dbConn) => {
            console.log('dbConn', dbConn);
            const Site = dbConn.model('Sites', SiteSchema);
            dbConn.model('Report',reportSchema);
            return Site.find({}).populate("reports").exec()
        })
        .then((sitesResponse) => {
            console.log(sitesResponse);
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(sitesResponse)
            });
        })
        .catch((err) => {
            console.log(err);
            callback(err);
        });
};