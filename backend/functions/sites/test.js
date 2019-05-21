//const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://database-admin:flytech57@flycomm-sis-aske2.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
let Antenna = require('../models/site');
let start = new Date().getMilliseconds();
Antenna.find({}).then(result=>{
    console.log(result);
    console.log(new Date(-start + new Date().getMilliseconds()).getMilliseconds());
}).catch(console.log);