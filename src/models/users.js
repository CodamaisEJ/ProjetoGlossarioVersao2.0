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
    tipo_de_usuario: {
      type: DataTypes.ENUM,
      values: ['administrador','especialista','pesquisador','pendente'],
      notIn: {
        args: [['administrador','especialista','pesquisador','pendente']],
        msg: {
          error: "Informe um dos 4 tipos de usuário corretamente!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'Users'
  });
  return Users;
};
