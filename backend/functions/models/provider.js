const Mongoose = require('mongoose');

let ProviderSchema = new Mongoose.modelSchemas({
    sites:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Site"
    }],
    name:String,
});

module.exports = ProviderSchema;