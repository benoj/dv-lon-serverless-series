module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      text: {
        comment: 'Some sime text',
        type: Sequelize.STRING,
      },
    })
  },
  down: async (queryInterface) => {
    return queryInterface.dropTable('Todos')
  },
}
