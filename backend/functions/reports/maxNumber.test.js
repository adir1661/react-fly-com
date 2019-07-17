const connectToDatabase = require('../helper/db_connection');
const ReportSchema = require('../models/report');
let finish = false;
const mongoUri = "mongodb+srv://database-admin:flytech57@flycomm-sis-aske2.mongodb.net/flycomm-sis?retryWrites=true";



connectToDatabase(mongoUri).then(conn => {
    let Report = conn.model('Report', ReportSchema);
    return Report.nextTitle();
}).then(max => {
    console.log(max);
    let maxString = max;
    console.log(maxString);
    finish = true;
}).catch(err => {
    console.log(err);
    finish = true;
});
