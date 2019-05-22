'use strict';
const connectToDatabase = require('../helper/db_connection');
let SiteSchema = require('../models/site');
let ReportSchema = require('../models/report');
const responses = require('../helper/response');


function createReport(reportObj,dbConn,siteId) {
    console.log('=> query database');
    return reportObj.save()
        .then((report) => {
            let Site = dbConn.model('Site',SiteSchema);
            Site.findById(siteId)
                .then((site)=>{
                    site.reports.push(report)
                    return site.save();
                }).then(site=>{
                    return responses.responseOk(report);
            })
                .catch(err=>{
                    return responses.responseError(err)
            })
            return responses.responseOk(report);
        })
        .catch(err => {
            console.log('=> an error occurred: ', err);
            return responses.responseError(500,err);
        });
}

function getTotalRate(issues) {
    let ratingAvg = issues.reduce((sum,issue)=>sum +Number(issue.rating))/issues.length;
    return ratingAvg;
}

module.exports.create = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    let {video,title,category,issues,description} = JSON.parse(event.body);
    let siteId = event.pathParameters.id;
    let rating = getTotalRate(issues);
    console.log('event: ', event);
    connectToDatabase()
        .then((dbConn) => {
            let Report  = dbConn.model('Report', ReportSchema);
            let report = new Report({
                video,
                description,
                title,
                category,
                issues,
                rating
            });
            return createReport(report,dbConn,siteId)})
        .then(response => {
            console.log('=> returning result: ', response);
            callback(null, response);
        })
        .catch(err => {
            console.log('=> an error occurred: ', err);
            callback(err);
        });
};