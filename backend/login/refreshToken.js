const  Res = require("./response");
global.fetch = require('node-fetch');
const AmazonCognitoIdentity =require("amazon-cognito-identity-js");
const Constants = require("./Constants");



exports.refresh = (event,context,callback)=>{
    context.callbackWaitsForEmptyEventLoop = false;
    let body;
    try{
        body = JSON.parse(event.body);
    }catch (e) {
        body = event.body;
        console.log(e,'\nbody without parsing: ' , body);
    }
    renew(body.email,body.refreshToken).then(idToken=>{
        callback(null,Res.responseOk(idToken))
    })

};
function renew(email,oldToken) {
    return new Promise((resolve, reject) => {
        const RefreshToken = new AmazonCognitoIdentity.CognitoRefreshToken({RefreshToken: oldToken});

        const userPool = new AmazonCognitoIdentity.CognitoUserPool({
            UserPoolId: Constants.USER_POOL_ID,
            ClientId: Constants.USER_POOL_CLIENT_ID,
        });

        const userData = {
            Username: email,
            Pool: userPool
        };

        const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

        cognitoUser.refreshSession(RefreshToken, (err, session) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                let retObj = {
                    "accessToken": session.accessToken.jwtToken,
                    "idToken": session.idToken.jwtToken,
                    "refreshToken": session.refreshToken.token,
                };
                console.log(retObj);
                resolve(retObj)
            }
        })
    });
}