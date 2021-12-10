'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcryptjs')

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
    tipo_de_usuario: {
      type: DataTypes.ENUM,
      values: ['administrador','especialista','pesquisador','pendente']
    },
    passwordResetToken: DataTypes.STRING,
    passwordResetExpires: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'Users'
  });
  
  return Users;
};
