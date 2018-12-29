'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize
  
  const Users = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: STRING(100), allowNull: false },
    name: { type: STRING(30), allowNull: false },
    password: { type: STRING(100), allowNull: false },
    created_at: DATE,
    updated_at: DATE,
  })

  return Users
}
