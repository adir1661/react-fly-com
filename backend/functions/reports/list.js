'use strict';
//let mongoose = require('mongoose');
//mongoose.connect(process.env.MONGODB_URI);
let reportSchema = require('../models/report');
const mongoose = require('mongoose');
const connectToDatabase = require("../helper/db_connection");
exports.list = function (event, context, callback) {
    // Make sure to add this so you can re-use `conn` between function calls.
    // See https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas
    context.callbackWaitsForEmptyEventLoop = false;

    // Because `conn` is in the global scope, Lambda may retain it between
    // function calls thanks to `callbackWaitsForEmptyEventLoop`.
    // This means your Lambda function doesn't have to go through the
    // potentially expensive process of connecting to MongoDB every time.
    connectToDatabase()
        .then(async (dbConn) => {
            console.log('dbConn', dbConn);
            const Report = dbConn.model('Report', reportSchema);
            return Report.find({});
        }).then((reportsResponse) => {
            console.log(reportsResponse);
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(reportsResponse)
        });
    })
        .catch((err) => {
            console.log(err);
            callback(err);
        });
};