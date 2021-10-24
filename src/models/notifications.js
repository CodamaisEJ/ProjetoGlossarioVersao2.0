'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notifications extends Model {

    static associate(models) {
      
    }
  };
  Notifications.init({
    status: DataTypes.STRING,
    data: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW 
    },
    usuario: {
      type: DataTypes.STRING,
    },
    termo: {
      type: DataTypes.STRING,
    },
    id_termo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: {
            error:'PK requerida para FK (Termo)!!'
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Notifications',
    tableName: 'Notifications'
  });
  return Notifications;
};