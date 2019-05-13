'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (body, context, callback) => {
    console.log(typeof body.text);
  const timestamp = new Date().getTime();
  let data;
  try {
      data = JSON.parse(body || '{}');


      if (typeof data.text !== 'string') {
          console.error('Validation Failed');
          callback(null, {
              statusCode: 400,
              headers: {'Content-Type': 'text/plain'},
              body: {
                  error: 'Couldn\'t create the todo item.', data,
                  eventBody: body || "undif",
                  time: 1
              }
          });
          return;
      }
  }
  catch (e) {
          callback(null,{error: e, data , body})
      }
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      text: data? data.text:'',
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
        headers: { 'Content-Type': 'text/plain' },
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
};
