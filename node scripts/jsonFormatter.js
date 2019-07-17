const fs = require('fs');
let jsonTest  = require('./test');

let event = {
    pathParameters:{id:"5cf6367dd96f4bec18d668d4"},
    body:JSON.stringify(jsonTest)
};

 let jsonFile = JSON.stringify(event);
fs.writeFileSync('test-response.json',jsonFile);