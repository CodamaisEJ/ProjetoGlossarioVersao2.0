'use strict';
const { text } = require('express');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    static associate(models) {
      
    }
  };
  Users.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    type_user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'Users'
  });
  return Users;
};
