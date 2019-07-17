'use strict';
const aws = require('aws-sdk');
const ses = new aws.SES();
const Res = require('./response');

function generateEmailParams (body) {
    let myEmail = 'adir@flytechil.com';
     let myDomain = 'Flycomm.co';
    const { email, name, content } = (body);
    let subject = body.subject || 'No Subject';
    console.log(email, name, content);
    if (!(email && name && content)) {
        throw new Error('Missing parameters! Make sure to add parameters \'email\', \'name\', \'content\'.')
    }

    return {
        Source: myEmail,
        Destination: { ToAddresses: [myEmail] },
        ReplyToAddresses: [myEmail],
        Message: {
            Body: {
                Text: {
                    Charset: 'UTF-8',
                    Data: `${content}`
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
    const emailParams = generateEmailParams(body);
    const sesPromise = ses.sendEmail(emailParams).promise();
    sesPromise.then(data=>{
        console.log('data:' , data);
        callback(null,Res.responseOk(data));
    }).catch(e=>{
        console.log('Erorr',e);
        callback(Res.responseError(e));
    });
};
