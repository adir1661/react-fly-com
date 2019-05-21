'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const Antenna = require('../models/site');
module.exports.get = (event, context, callback) => {
    let antennaId = event.pathParameters.id;

    Antenna.findById(antennaId).then((result)=> {
        const response = {
            statusCode: 200,
            body: JSON.stringify(result),
        };
        callback(null, response);
    }).catch((error)=>{// handle potential errors
        if (error) {
            console.error('=> there was error getting the item',error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: {'Content-Type': 'text/plain'},
                body: error,
            });
        }
    })
};
