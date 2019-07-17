const Mongoose = require('mongoose');
let cachedDb = null;
let MONGO_URI = process.env.MONGODB_URI;
const connectToDatabase = function (URI) {
    console.log('=> connecting to database...');
    try {
        if (cachedDb/*todo check this method later*//*&&cachedDb.isConnected()*/) {
            console.log('=> using cached database instance');
            return Promise.resolve(cachedDb);
        }
        return Mongoose.connect(MONGO_URI || URI, {useNewUrlParser: true}).then(db => {
            console.log('=> mongoose connected');
            cachedDb = db;
            return cachedDb;
        });
    }
    catch (e) {
        console.log(e);
        return Promise.reject(e);
    }
};
module.exports = connectToDatabase;