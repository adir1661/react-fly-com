'use strict';

const Res = require("../helper/response");
const connectToDatabase = require('../helper/db_connection');
const TextModel = require('../models/text');
let Text;
module.exports.list = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    let body;
    try {
        body = JSON.parse(event["queryStringParameters"]);
    } catch (e) {
        console.log(e);
        body = event["queryStringParameters"] ;
    }
    console.log(body);
    let lang = body?body.lang:null;
    let system = body?body.system:null;
    console.log('lang: ',lang,'\nsystem: ',system + '\n');
    let url = (process.env.MONGODB_URI).replace('/'+process.env.MONGODB_SITES.trim(),'/'+process.env.MONGODB_TRANSLATIONS.trim());
    console.log('process.env.MONGODB_SITES: ' +process.env.MONGODB_SITES +'\nprocess.env.MONGODB_TRANSLATIONS: ' + process.env.MONGODB_TRANSLATIONS)
    console.log(url);
    connectToDatabase(url).then(dbConn => {
        Text = TextModel(dbConn);
        let options = {};
        if(lang)
            options.lang = lang;
        if(system)
            options.system = system;
        return Text.find(options);
    }).then(result => {
        console.log('sucessfully got data!',result);
        callback(null, Res.responseOk(result));
    }).catch(err => {
        console.log(err);
        callback(null, Res.responseError(502, err))
    });
};
