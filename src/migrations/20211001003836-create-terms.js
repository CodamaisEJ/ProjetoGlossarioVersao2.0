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
      sugestao: {
        type: Sequelize.STRING
      },
      categoria_gramatical: {
        type: Sequelize.STRING
      },
      definicao: {
        type: Sequelize.STRING
      },
      fonte_da_definicao: {
        type: Sequelize.STRING
      },
      fonte_do_contexto_de_uso: {
        type: Sequelize.STRING
      },
      contexto_de_uso: {
        type: Sequelize.STRING
      },
      data_de_registro: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW
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
      definicao_italiano: {
        type: Sequelize.STRING
      },
     	contexto_italiano: {
        type: Sequelize.STRING
      },
      termo_espanhol: {
        type: Sequelize.STRING
      },
      termo_frances: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      revisao_especialista: {
        type: Sequelize.STRING
      },
      data_da_ultima_revisao: {
        type: Sequelize.DATEONLY
      },
      freq_no_termo_corpus: {
        type: Sequelize.STRING
      },
      autor: {
        type: Sequelize.STRING
      },
      revisao_linguistica: {
        type: Sequelize.STRING
      },
      proposta_de_definicao: {
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
      fonte_do_contexto_de_uso1: {
        type: Sequelize.STRING
      },
      fonte_do_contexto_de_uso2: {
        type: Sequelize.STRING
      },
      fonte_do_contexto_de_uso3: {
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
      sinonimica: {
        type: Sequelize.STRING
      },
      siglas: {
        type: Sequelize.STRING
      },
      acronimos: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
       publicar: {
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
