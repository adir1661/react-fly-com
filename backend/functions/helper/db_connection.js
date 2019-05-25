const Mongoose = require('mongoose');
const Promise = require('bluebird');
Mongoose.Promise = Promise;
let cachedDb = null;
let MONGO_URI = process.env.MONGODB_URI;
const  connectToDatabase = function(){
    console.log('=> connect to database');
    try{
        if (cachedDb) {
            console.log('=> using cached database instance');
            return Promise.resolve(cachedDb);
        }

        return Mongoose.connect(MONGO_URI, {useNewUrlParser: true})
            .then(db => {
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