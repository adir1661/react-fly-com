var mongoose = require("mongoose");
//todo check connection to database on this url
var reportSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    rating: Number,
    video: String,
    description: String,
    title: String,
    category: String,
    filledBy: String,
    issues: [{
        title: String,
        rating: Number,
        issueNum: Number,
        stability: String,
        gallery: [String],
        description: String,
    }],
    providerLogo: String,
    site: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Site"
    },
});
reportSchema.statics.findMax = function (callback) {
    try {
        let findMaxNumber = function (arr) {
            if (arr.length === 0) return null;
            if (arr.length === 1) return this[0];
            var v = isNaN(arr[0]) ? 0 : arr[0];
            for (var i = 1; i < arr.length; i++) {
                if (!isNaN(arr[i])) {
                    v = Math.max(arr[i], v);
                }
            }
            return v;
        };
        this.find({}).then((reports) => {
            let highest = findMaxNumber(reports.map(report => Number(report.title)));
            callback(null, highest)
        })
    } catch (e) {
        callback(e);
    }// 'this' now refers to the Member class
};
reportSchema.statics.findMaxPromise = function () {
    let self = this;
    return new Promise((resolve, reject) => {
        self.findMax((err, max) => {
            if (err) return reject(err);
            return resolve(max);
        })
    });
};
reportSchema.statics.nextTitle = function () {
    return this.findMaxPromise().then(max => {
        if(typeof max !== "number"){
            throw Error('the Value inserted to "nextTitle" is not a number');
        }
        max = max +1;
        let digits = (max - max % 10) / 10;
        return "0".repeat(3 - digits) + max;
    })
};
module.exports = reportSchema;