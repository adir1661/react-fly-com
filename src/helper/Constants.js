const Constants = (() => {

    let constants = {
        TRANSLATION_URL: 'https://0zx2os04v7.execute-api.eu-west-1.amazonaws.com/dev/translations',
        // REST_API_URL: 'https://0zx2os04v7.execute-api.eu-west-1.amazonaws.com/dev/',
        AUTH_URL: 'https://haqwznnb0i.execute-api.us-east-1.amazonaws.com/dev/',
        EMAIL_URL: 'https://aut4pawf7k.execute-api.eu-west-1.amazonaws.com/dev/',
        JWT_TOKEN_ID: 'token_id',
        JWT_REFRESH_TOKEN: 'refresh_token',
        JWT_ACCESS_TOKEN: 'access_token',
        JWT_EMAIL: 'user_email',
    };
    return (() => {
        console.log('process.env.REACT_APP_STAGE:' + process.env.REACT_APP_STAGE);
        if (process.env.REACT_APP_STAGE === 'dev') {
            return {
                ...constants,
                REST_API_URL: 'https://0zx2os04v7.execute-api.eu-west-1.amazonaws.com/dev/',
                TRANSLATION_URL: 'https://0zx2os04v7.execute-api.eu-west-1.amazonaws.com/dev/translations',
            }
        }
        if (process.env.REACT_APP_STAGE === 'prod') {
            return {
                ...constants,
                REST_API_URL: 'https://efdh71giwa.execute-api.eu-west-1.amazonaws.com/prod/',
                TRANSLATION_URL: 'https://efdh71giwa.execute-api.eu-west-1.amazonaws.com/prod/translations',
            }
        }
    })();

})();
console.log('Constants.TRANSLATION_URL:  ' + Constants.TRANSLATION_URL);
console.log('Constants.REST_API_URL:  ' + Constants.REST_API_URL);

export default Constants;