'use strict';
const connectToDatabase = require('../helper/db_connection');
let SiteSchema = require('../models/site');
let ReportSchema = require('../models/report');
const responses = require('../helper/response');


function createReport(reportObj, dbConn, siteId) {
    console.log('=> query database');
    let report = {};
    return reportObj.save()
        .then((reportReturned) => {
            report = reportReturned;
            let Site = dbConn.model('Site', SiteSchema);
            return Site.findById(siteId)
        }).then((site) => {
            console.log(">>>>>>>>>>>>>>>>>>>>", site);
            site.reports.push(report);
            return site.save();
        }).then((site)=>{
            report.site = site;
            return report.save()
        }).then(reportObjectFinal => {
            console.log(reportObjectFinal);
            return responses.responseOk(reportObjectFinal);
        })
        .catch(err => {
            console.log('=> an error occurred: ', err);
            return responses.responseError(500, err);
        });
}

function getAverageRating(issues) {
    return issues.length > 1 ? ((issues.reduce( function(a, b){return a + Number(b.rating).toFixed(2)}, 0)) / (issues.length)) : issues[0].rating;
}

module.exports.create = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    let {video, title, category, issues, description, vid : videoString } = JSON.parse(event.body);
    let siteId = event.pathParameters.id;
    let rating = getAverageRating(issues);
    console.log('rating: ', rating);
    console.log('issues: ', issues);
    console.log('video String :', videoString);
    connectToDatabase()
        .then((dbConn) => {
            let Report = dbConn.model('Report', ReportSchema);
            let report = new Report({
                video,
                description,
                title,
                category,
                issues,
                rating,
                vid:videoString
            });
            return createReport(report, dbConn, siteId)
        })
        .then(response => {
            console.log('=> returning result: ', response);
            callback(null, response);
        })
        .catch(err => {
            console.log('=> an error occurred: ', err);
            callback(err);
        });
};