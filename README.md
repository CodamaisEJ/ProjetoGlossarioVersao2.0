# ProjetoGlossarioVersao2.0
Atualização de um sistema já existente.

## 🚀 Passos para executar o projeto
Olá 🐱‍🏍, seguem esses passos abaixo para startar o prototipo do sistema: 


### OBS: 
Chequem, o arquivos config.json que está na pasta config dentro de src, este arquivo é onde está a credenciais do bd, o nome de usuario do banco de dados que no meu caso é o postgres e a senha,
chequem para ver se são as mesmas credenciais do banco de voces.


Ah e entrem dentro da pasta back-end antes de dar os comandos depois deste comando.

    cd back-end

Para instalar as dependencias:

    npm install

Para startar rode:

    npm run dev

## Atenção 💣

 Criem outro terminal para executar os comandos abaixo, pois no terminal anterior tem que está rodando o server com nodemon

Para criar a database:

    npx sequelize-cli db:create

Para criar as migrations no bd:

    npx sequelize-cli db:migrate
