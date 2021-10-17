'use strict';
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
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      unique: {
        args: true,
        msg: {
          error: 'Email já está sendo utilizado por outro usuário. Utilize outro!'
        }
      }
    },
    senha: DataTypes.STRING,
    tipo_de_usuario: DataTypes.ENUM('administrador','especialista','pesquisador','pendente')
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'Users'
  });
  return Users;
};
