var mongoose = require("mongoose");
// mongoose.connect(process.env.MONGODB_URI||'mongodb+srv://database-admin:flytech57@flycomm-sis-aske2.mongodb.net/test?retryWrites=true');

var siteSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: String,
    address: String,
    provAntennaId: String,
    description: String,
    type: String,
    contact:String,
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "provider"
    },
    location:{
        lng:Number,
        lat:Number
    },
    reports: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Report"
        }
    ],
    marker_image: String,
    gallery:[String]
});

// var Antenna = mongoose.model("Antenna",antennaSchema);
module.exports = siteSchema;