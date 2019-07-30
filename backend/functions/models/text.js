const mongoose = require("mongoose");
// mongoose.connect(process.env.MONGODB_URI||'mongodb+srv://database-admin:flytech57@flycomm-sis-aske2.mongodb.net/test?retryWrites=true');

let textSchema = new mongoose.Schema({
    translation:String,
    textCode:String,
    system:String,
    lang:String,
});
// var Antenna = mongoose.model("Antenna",antennaSchema);
module.exports = (dbConn)=>(dbConn.model('Text',textSchema));