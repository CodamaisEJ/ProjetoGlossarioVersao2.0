'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Terms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      area: {
        type: Sequelize.STRING
      },
      categoria_gramatical: {
        type: Sequelize.STRING
      },
      data_de_registro: {
        type: Sequelize.DATEONLY
      },
      entrada: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      nota: {
        type: Sequelize.STRING
      },
      nota2: {
        type: Sequelize.STRING
      },
      redator: {
        type: Sequelize.STRING
      },
      remissiva: {
        type: Sequelize.STRING
      },
      hiponimo:{
         type: Sequelize.STRING
      },
      hiperonimo:{ 
        type: Sequelize.STRING
      },
      co_hiponimo:{ 
        type: Sequelize.STRING
      },
      termo_ingles: {
        type: Sequelize.STRING
      },
      termo_italiano: {
        type: Sequelize.STRING
      },
      termo_espanhol: {
        type: Sequelize.STRING
      },
      termo_frances: {
        type: Sequelize.STRING
      },
      termo_alemao: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      revisao_especialista: {
        type: Sequelize.STRING
      },
      data_da_ultima_revisao: {
        type: Sequelize.STRING
      },
      freq_no_termo_corpus: {
        type: Sequelize.INTEGER
      },
      autor: {
        type: Sequelize.STRING
      },
      revisao_linguistica: {
        type: Sequelize.STRING
      },
      proposta_de_revisao: {
        type: Sequelize.STRING
      },
      fonte_da_definicao: {
        type: Sequelize.STRING
      },
      fonte_dicionario_especializado1: {
        type: Sequelize.STRING
      },
      fonte_dicionario_especializado2: {
        type: Sequelize.STRING
      },
      fonte_dicionario_lingua_comum: {
        type: Sequelize.STRING
      },
      fonte_proposta_de_definicao: {
        type: Sequelize.STRING
      },
      fonte_do_contexto_de_uso: {
        type: Sequelize.STRING
      },
      fonte_do_contexto_de_uso1: {
        type: Sequelize.STRING
      },
      fonte_do_contexto_de_uso2: {
        type: Sequelize.STRING
      },
      fonte_do_contexto_de_uso3: {
        type: Sequelize.STRING
      },
      contexto_de_uso: {
        type: Sequelize.STRING
      },
      contexto_de_uso1: {
        type: Sequelize.STRING
      },
      contexto_de_uso2: {
        type: Sequelize.STRING
      },
      contexto_de_uso3: {
        type: Sequelize.STRING
      },
      proposta: {
        type: Sequelize.STRING
      },
      definicao: {
        type: Sequelize.TEXT
      },
      dicionario_especializado1: {
        type: Sequelize.STRING
      },
      dicionario_especializado2: {
        type: Sequelize.STRING
      },
      dicionario_lingua_comum: {
        type: Sequelize.STRING
      },
      proposta_de_definicao: {
        type: Sequelize.STRING
      },
      variantes: {
        type: Sequelize.STRING
      },
      ortografica: {
        type: Sequelize.STRING
      },
      geografica: {
        type: Sequelize.STRING
      },
      sinomica: {
        type: Sequelize.STRING
      },
      siglas: {
        type: Sequelize.STRING
      },
      acronimos: {
        type: Sequelize.STRING
      },
      situacao_termo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Terms');
  }
};