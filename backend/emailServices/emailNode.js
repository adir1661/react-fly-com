var nodemailer = require('nodemailer');
let email= process.env.email;
let password = process.env.password;
let Res  = require('./response');
console.log(email+', ' + password+'.');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
});
let sendMail = (to,title,body)=> {
    return new Promise((resolve,reject)=> {
        var mailOptions = {
            from: email,
            to: to || 'adir@flytechil.com',
            subject: title || 'Sending Email using Node.js',
            text: body || 'That was easy!'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log('Email sent: ' + info.response);
                resolve(info)
            }
        });
    });
};
module.exports.emailNode = (event,context,callback) => {
    let body;
    try {
        body = JSON.parse(event.body);
    } catch (e) {
        console.log(e.message);
        console.log('data recieved, body: ', event.body, '\n event', event);
        body = event||'body is not a body brother!';
    }
    let emails = body.toEmails||[];
    let emailPromises = [];
    console.log('emails:');
    let {title,text} = body;
    emails.forEach(email=>{
        console.log(email);
        let promise = sendMail(email,title,text);
        emailPromises.push(promise);
    });
    Promise.all(emailPromises).then(data=>{
        console.log('data:' , data);
        callback(null,Res.responseOk(data));
    }).catch(e=>{
        console.log('Erorr',e);
        callback(Res.responseError(e));
    });
};
