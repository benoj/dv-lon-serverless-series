module.exports = async (text) => {
  return await db.sequelize.query('INSERT INTO Todos (id, text) VALUES (:id, :text)',
  { replacements: { id: '9987272', text } })
}

