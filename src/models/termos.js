'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class termos extends Model {

    static associate(models) {
    }
  };
  termos.init({
    area: {
      type: DataTypes.STRING
    },
    categoria_gramatical: DataTypes.STRING,
    data_de_registro: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,     
    },
    entrada: DataTypes.STRING,
    sugestao: DataTypes.STRING,
    definicao: DataTypes.STRING,
    fonte_do_contexto_de_uso: DataTypes.STRING,
    fonte_da_definicao: DataTypes.STRING,
    contexto_de_uso: DataTypes.STRING,
    genero: DataTypes.STRING,
    nota: DataTypes.STRING,
    redator: DataTypes.STRING,
    remissiva: DataTypes.STRING,
    hiponimo: DataTypes.STRING,
    hiperonimo: DataTypes.STRING,
    co_hiponimo: DataTypes.STRING,
    termo_ingles: DataTypes.STRING,
    termo_italiano: DataTypes.STRING,
    definicao_italiano: DataTypes.STRING,
    contexto_italiano: DataTypes.STRING,
    termo_espanhol: DataTypes.STRING,
    termo_frances: DataTypes.STRING,
    numero: DataTypes.STRING,
    revisao_especialista: DataTypes.STRING,
    data_da_ultima_revisao: DataTypes.DATEONLY,
    freq_no_termo_corpus: DataTypes.STRING,
    autor: {
      type: DataTypes.STRING     
    },
    revisao_linguistica: DataTypes.STRING,
    fonte_dicionario_especializado1: DataTypes.STRING,
    fonte_dicionario_especializado2: DataTypes.STRING,
    fonte_dicionario_lingua_comum: DataTypes.STRING,
    fonte_proposta_de_definicao: DataTypes.STRING,
    fonte_do_contexto_de_uso1: DataTypes.STRING,
    fonte_do_contexto_de_uso2: DataTypes.STRING,
    fonte_do_contexto_de_uso3: DataTypes.STRING,
    contexto_de_uso1: DataTypes.STRING,
    contexto_de_uso2: DataTypes.STRING,
    contexto_de_uso3: DataTypes.STRING,
    proposta: DataTypes.STRING,
    dicionario_especializado1: DataTypes.STRING,
    dicionario_especializado2: DataTypes.STRING,
    dicionario_lingua_comum: DataTypes.STRING,
    proposta_de_definicao: DataTypes.STRING,
    variantes: DataTypes.STRING,
    ortografica: DataTypes.STRING,
    geografica: DataTypes.STRING,
    sinonimica: DataTypes.STRING,
    siglas: DataTypes.STRING,
    acronimos: DataTypes.STRING,
    publicar: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,   
    }
  }, {
    sequelize,
    modelName: 'termos',
    tableName: 'termos'
  });
  return termos;
};
