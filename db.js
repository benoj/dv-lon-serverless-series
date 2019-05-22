const options = {
  client: 'mysql2',
  connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'temp',
      database: 'simple_api'
  }
}


//database.js
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'simple_api',
    'root',
    'temp',
    {
        host: process.env.MYSQLHOST,
        dialect: 'mysql',
        port: process.env.MYSQLPORT,
        logging: false,
        pool: {
            max: 5,
            min: 0,
            idle: 20000,
            handleDisconnects: true
        },
        dialectOptions: {
            requestTimeout: 100000
        },
        define: {
            freezeTableName: true
        }
    }
);
var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
