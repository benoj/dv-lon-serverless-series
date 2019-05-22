'use strict';
const db = require('../db')
const Migration = require('../db/migration')

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  const migration = new Migration()

  try {
    const migrationsRan = await migration.up()

    const migrationFilesList = migrationsRan.map(({ file }) => file).join('\n')
    const migrationsReport = `Migrations Ran:\n ${migrationFilesList}`

    console.log('migrations-ran', { migrationsReport })

    await migration.close()
    return migrationsReport
  } catch (err) {
    console.error('Migrations failed', err)
    await migration.close()
    throw err
  }
};
