const Res =require("./response");
global.fetch = require('node-fetch');
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var poolData = { UserPoolId : 'eu-west-1_sSJnOX3r9',
    ClientId : '248rjadpv612d4cbf723g2ubi4'
};

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
function attributeList(obj){
    let attributeList = [];
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log('attribute cognito : ',{Name:key,Value:obj[key]});
            attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:key,Value:obj[key]}));
        }
    }
    return attributeList;
}
function signUpUser(email,password,attributeList) {
    return new Promise((resolve, reject) => {
        userPool.signUp(email, password, attributeList, null, function (err, result) {
            if (err) {
                reject(err);
                return;
            }
            let cognitoUser = result.user;
            console.log('user name is ' + cognitoUser.getUsername());
            resolve(cognitoUser);
        });
    });
}

exports.register = (event,context,callback)=> {
    // return;
    let body = JSON.parse(event.body);
    let email = body.email;
    let password = body.password;
    var attributeListObj  = attributeList({email: email});//email as attribute 'email' and also as 'username';
    signUpUser(email,password,attributeListObj).then((user)=>{
        console.log(user);
       callback(null,Res.responseOk(user))
    }).catch((err)=>{
        console.log(err);
        callback(null,Res.responseError(null,err))
    });

};