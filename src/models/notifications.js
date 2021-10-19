'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notifications extends Model {

    static associate(models) {
      Notifications.belongsTo(models.Terms, { as: 'NotificacaodoTermo', foreignKey: 'fk_id_termo'})
    }
  };
  Notifications.init({
    situacao_termo: DataTypes.STRING,
    data: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW 
    },
    fk_id_termo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'PK requerida para FK (Termo)!!'
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