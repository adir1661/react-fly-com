let connectToDatabase = require('./db_connection');
let ReportModel = require('./model').reportModel;
let issues = [
    {name: 'Antenna\'s intergity and screw strengthening', id: 'integrity'},
    {name: 'cabels integrity', id: 'cabels'},
    {name: 'connectors tightness', id: 'tightness'},
    {name: 'unwanted cabels', id: 'uncabels'},
    {name: 'monitor lightness', id: 'monitor_lightness'},
    {name: 'blocking', id: 'blocking'},
    {name: 'antenna\'s stickers', id: 'stickers'},
];
connectToDatabase().then(dbConn => {
    let Report = ReportModel(dbConn);
    Report.find({}).then(reports => {
        // console.log(reports);
        let reportPromises = []
        reports.forEach((report, i) => {
            report.issues.forEach((issue, index) => {
                issue.title = 'issue' + (issues.indexOf(issues.find(item => {
                    if (!issue.title) return false;
                    // console.log('>'+item.name+'<<vs.>>'+issue.title.replace(':','') +'<');
                    return item.name === issue.title.replace(':', '')
                })));
                console.log(issue.title);
            })
            reportPromises.push(report.save());
        })
    }).then(rep =>{
        console.log('succeed');
    })
});