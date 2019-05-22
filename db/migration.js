const Umzug = require('umzug')
const db = require('../db')
const appRoot =  require('app-root-path')
const join = require('path').join

const buildRuntimePath = (path) => join(appRoot.toString(), 'dist/', path)

module.exports = class Migration {

  constructor() {
    this.init()
  }

  pending() {
    return this.umzug.pending()
  }

  up() {
    return this.umzug.up()
  }

  down() {
    return this.umzug.down()
  }

  close() {
    return this.sequelize.close()
  }

  init() {
    this.sequelize = db.sequelize
    const migrationPath = 'db/migrations'

    this.umzug = new Umzug({
      storage: 'sequelize',
      storageOptions: {
        sequelize: this.sequelize,
      },
      migrations: {
        path: migrationPath,
        params: [this.sequelize.getQueryInterface(), this.sequelize.constructor],
      },
      logging() {
        console.log.apply(null, arguments)
      },
    })
  }
}
