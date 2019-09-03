const Constants = require("./Constants");

const Res = require("./response");
const secret = require('./secret');
var poolData = {
    UserPoolId: Constants.USER_POOL_ID,
    ClientId: Constants.USER_POOL_CLIENT_ID,
};
global.fetch = require('node-fetch');
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
// function attributeList(obj){
//     let attributeList = [];
//     for (let key in obj){
//         if(obj.hasOwnProperty(key)){
//             console.log('attribute cognito : ',{Name:key,Value:obj[key]});
//             attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:key,Value:obj[key]}));
//         }
//     }
//     return attributeList;
// }
function login(email, password) {
    return new Promise((resolve, reject) => {
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
            Username: email,
            Password: password,
        });
        var userData = {
            Username: email,
            Pool: userPool
        };
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                console.log('access token + ' + result.getAccessToken().getJwtToken());
                console.log('id token + ' + result.getIdToken().getJwtToken());
                console.log('refresh token + ' + result.getRefreshToken().getToken());
                resolve(result);
            },
            onFailure: function (err) {
                console.log('authenticateUser onFailure: error - ', err);
                reject(err);
            },
            newPasswordRequired: function () {
                console.log('newPasswordRequired');
                cognitoUser.completeNewPasswordChallenge(password, {}, this);
            }

        });

    })
}

exports.login = (event, context, callback) => {
    let body = JSON.parse(event.body);
    let email = body.email;
    let password = body.password;
    login(email, password).then((result => {
        let resultObj = {
            accessToken: result.getAccessToken().getJwtToken(),
            idToken: result.getIdToken().getJwtToken(),
            refreshToken: result.getRefreshToken().getToken()
        };
        console.log(resultObj);
        return resultObj;
    })).then((tokens => {
        console.log(tokens);
        callback(null, Res.responseOk({user: email, tokens}));
    })).catch(err => {
        callback(null, Res.responseError(null, err));
    })
};