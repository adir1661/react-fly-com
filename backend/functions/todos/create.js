'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
    const timestamp = new Date().getTime();
    let data;
    try {
        console.log(event);
        let body;
        try {
            body = JSON.parse(event.body);
        } catch (e) {
            console.log(e);
            body = event.body;
        }
        data = (body || '{}');
        if (typeof data.text !== 'string') {
            console.error('Validation Failed');
            callback(null, {
                statusCode: 400,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    error: 'Couldn\'t create the todo item.',
                    //data: data || 'there is no data obj content',
                    eventBody: body || "undif",
                    time: 1,
                    tEvent: event,
                })
            });
            return;
        }
        const params = {
            TableName: process.env.DYNAMODB_TABLE,
            Item: {
                id: uuid.v1(),
                text: data ? data.text : '',
                checked: false,
                createdAt: timestamp,
                updatedAt: timestamp,
            },
        };
        // write the todo to the database
        dynamoDb.put(params, (error) => {
            // handle potential errors
            if (error) {
                console.error(error);
                callback(null, {
                    statusCode: error.statusCode || 501,
                    headers: {'Content-Type': 'text/plain'},
                    body: 'Couldn\'t create the todo item.',
                });
                return;
            }
            // create a response
            const response = {
                statusCode: 200,
                body: JSON.stringify(params.Item),
            };
            callback(null, response);
        });
    }
    catch (e) {
        console.log(e);
        callback(null, {
            statusCode: 200,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                body: body || {...event, name: 'event'} || "no body",
                error: e,
                data: data || 'there is no data obj content',
            })
        })
    }
};
