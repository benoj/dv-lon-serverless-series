'use strict';
const db = require('../db')
const domain = require('../domain')


module.exports.hello = async (event, context) => {

  const todos = await domain(event.queryStringParameters.text)
  
  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
};
