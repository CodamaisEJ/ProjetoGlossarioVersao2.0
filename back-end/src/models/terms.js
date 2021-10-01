'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Terms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Terms.init({
    area: DataTypes.STRING,
    categoria_gramatical: DataTypes.STRING,
    data_de_registro: DataTypes.DATEONLY,
    entrada: DataTypes.STRING,
    genero: DataTypes.STRING,
    nota: DataTypes.STRING,
    nota2: DataTypes.STRING,
    redator: DataTypes.STRING,
    remissiva: DataTypes.STRING,
    hiponimo: DataTypes.STRING,
    hiperonimo: DataTypes.STRING,
    co_hiponimo: DataTypes.STRING,
    termo_ingles: DataTypes.STRING,
    termo_italiano: DataTypes.STRING,
    termo_espanhol: DataTypes.STRING,
    termo_frances: DataTypes.STRING,
    termo_alemao: DataTypes.STRING,
    numero: DataTypes.STRING,
    revisao_especialista: DataTypes.STRING,
    data_da_ultima_revisao: DataTypes.STRING,
    freq_no_termo_corpus: DataTypes.INTEGER,
    autor: DataTypes.STRING,
    revisao_linguistica: DataTypes.STRING,
    proposta_de_revisao: DataTypes.STRING,
    fonte_da_definicao: DataTypes.STRING,
    fonte_dicionario_especializado1: DataTypes.STRING,
    fonte_dicionario_especializado2: DataTypes.STRING,
    fonte_dicionario_lingua_comum: DataTypes.STRING,
    fonte_proposta_de_definicao: DataTypes.STRING,
    fonte_do_contexto_de_uso: DataTypes.STRING,
    fonte_do_contexto_de_uso1: DataTypes.STRING,
    fonte_do_contexto_de_uso2: DataTypes.STRING,
    fonte_do_contexto_de_uso3: DataTypes.STRING,
    contexto_de_uso: DataTypes.STRING,
    contexto_de_uso1: DataTypes.STRING,
    contexto_de_uso2: DataTypes.STRING,
    contexto_de_uso3: DataTypes.STRING,
    proposta: DataTypes.STRING,
    definicao: DataTypes.TEXT,
    dicionario_especializado1: DataTypes.STRING,
    dicionario_especializado2: DataTypes.STRING,
    dicionario_lingua_comum: DataTypes.STRING,
    proposta_de_definicao: DataTypes.STRING,
    variantes: DataTypes.STRING,
    ortografica: DataTypes.STRING,
    geografica: DataTypes.STRING,
    sinomica: DataTypes.STRING,
    siglas: DataTypes.STRING,
    acronimos: DataTypes.STRING,
    situacao_termo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Terms',
  });
  return Terms;
};