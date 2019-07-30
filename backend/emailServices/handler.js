'use strict';
const aws = require('aws-sdk');
const ses = new aws.SES();
const Res = require('./response');

function generateEmailParams (body) {
    let myEmail = 'adir@flytechil.com';
     let myDomain = 'SIS.Flycomm.co';
    const { email, name, content } = (body);
    let subject = body.subject || 'No Subject';
    console.log(email, name, content);
    if (!(email && name && content)) {
        throw new Error('Missing parameters! Make sure to add parameters \'email\', \'name\', \'content\'.')
    }

    return {
        Source: myEmail,
        Destination: { ToAddresses: [email] },
        ReplyToAddresses: [myEmail],
        Message: {
            Body: {
                Text: {
                    Charset: 'UTF-8',
                    Data: `${name? 'Hello ' + name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()+'. \n':''}
                    ${content}\n
                    To view more details click here: https://${myDomain}`
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: subject
            }
        }
    }
}
module.exports.email = (event,context,callback) => {
    let body;
    try {
        body = JSON.parse(event.body);
    } catch (e) {
        console.log('data recieved on upload image, body: ', event.body, '\n event', event);
        body = event;
    }
    try {
        const emailParams = generateEmailParams(body);
        const sesPromise = ses.sendEmail(emailParams).promise();
        sesPromise.then(data => {
            console.log('data:', data);
            callback(null, Res.responseOk(data));
        }).catch(e => {
            console.log('Erorr', e);
            callback(null,Res.responseError(null,e));
        });
    }catch (e) {
        console.log(e);
        callback(null,Res.responseError(null,e))
    }
};
