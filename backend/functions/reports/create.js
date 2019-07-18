'use strict';
const connectToDatabase = require('../helper/db_connection');
let SiteSchema = require('../models/site');
let ReportSchema = require('../models/report');
const responses = require('../helper/response');
var aws = require('aws-sdk');
const lambda = new aws.Lambda({});
let addGalleryToS3 = (gallery, destination) => {
    return new Promise((resolve, reject) => {
        lambda.invoke({
            FunctionName: 'sis-flycomm-dev-upload-image',
            Payload: JSON.stringify({gallery, fileName: destination}) // pass params
        }, function (error, data) {//return object = [{...putObjectResponse,url},...]
            if (error) {
                console.log('error on invokation!', error);
                return reject(error)
            } else {
                resolve(data);
            }
        })
    });
};

function createReport(reportObj, dbConn, siteId, siteGallery) {
    console.log('=> query database');
    let report = {};
    return reportObj.save()
        .then((reportReturned) => {
            report = reportReturned;
            let promises = [];
            promises.push(addGalleryToS3(siteGallery, 'Site/site'));
            let Site = dbConn.model('Site', SiteSchema);
            promises.push(Site.findById(siteId));
            return Promise.all(promises);
        }).then(arr => ({urls: JSON.parse(arr[0].Payload).map(item => item.url), site: arr[1]}))
        .then(obj => {
            let site = obj.site;
            let urls = obj.urls;
            site.gallery = site.gallery ? site.gallery.concat(obj.urls) : obj.urls;
            site.marker_image = site.marker_image || obj.urls[0];
            site.reports.push(report);
            return site.save();
        }).then((site) => {
            report.site = site;
            return report.save()
        })
        .catch(err => {
            console.log('=> an error occurred: ', err);
            return responses.responseError(500, err);
        });
}

function getAverageRating(issues) {
    let overallRating = issues.length > 1 ? ((issues.reduce(function (a, b) {
        return Number(a) + Number(Number(b.rating).toFixed(2))
    }, 0)) / (issues.length)) : issues[0].rating;
    overallRating = Number(Number(overallRating).toFixed(2));
    return overallRating;
}

function extractIssues(issues) {
    issues = issues || [];
    let galleryList = [];
    issues.forEach((issue, i) => {
        galleryList[i] = (issue.gallery);
        issue.gallery = undefined;
    });
    return {issuesList: issues, galleryList};
}

module.exports.create = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    let {category, issues, description, gallery} = JSON.parse(event.body);
    let siteId = event.pathParameters.id +'';
    let rating = getAverageRating(issues);
    let {issuesList, galleryList} = extractIssues(issues);
    console.log('rating: ', rating);
    console.log('galleryList: ', galleryList.map(item =>item?item.length:"no list" ));
    console.log('siteId:', siteId);
    let reportReference;
    let Report;
    let dbConnection;
    connectToDatabase()
        .then((dbConn) => {
            dbConnection =dbConn;
            Report = dbConnection.model('Report', ReportSchema);
            return Report.nextTitle();
        }).then((title)=>{
            let report = new Report({
                title,
                description,
                category,
                issues: issuesList,
                rating,
            });
            return createReport(report, dbConnection, siteId, gallery)
        })
        .then(reportRef => {
            reportReference = reportRef;
            let issuesGalleries = galleryList.map((galleryFiles,i)=>addGalleryToS3(galleryFiles,'Sites/'+siteId+'/Reports/issue_'+i));
            return Promise.all(issuesGalleries);//todo optimize(u can asyncly create report and add all gallery to s3 at the same promise batch job)
        })
        .then(responses => {
            responses.forEach((respone,i) =>{
                reportReference.issues[i].gallery = JSON.parse(respone.Payload).map(item=>item.url);
            });
            return reportReference.save();
        })
        .then(reportObjectFinal => {
            console.log('reportObject after save:',reportObjectFinal);
            callback(null, responses.responseOk(reportObjectFinal));
        })
        .catch(err => {
            console.log('=> an error occurred: ', err);
            callback(responses.responseError(null,err));
        });
};