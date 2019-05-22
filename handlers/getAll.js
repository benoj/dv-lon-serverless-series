'use strict';
const db = require('../db')

module.exports.hello = async (event, context) => {




  const result = await db.sequelize.query(`SELECT * FROM Todos`, { type: db.sequelize.QueryTypes.SELECT})

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello World ${JSON.stringify(result)}`,
    }),
  };
};
