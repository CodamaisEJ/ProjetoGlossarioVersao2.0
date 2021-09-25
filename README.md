# ProjetoGlossarioVersao2.0
Atualização de um sistema já existente.

Olá, seguem esses passos abaixo para startar o prototipo do sistemas: 
OBS: chequem, no arquivos config.json lá é onde está a credenciais do bd, o nome de usuario do banco de dados que no meu caso é o postgres e a senha,
chequem para ver se são os mesmos.
Ah e entre dentro da pasta back-end antes de dar os comandos abaixos.
para instalar as dependencias:
    npm install
para startar rode:
    npm run dev

--Criem outro terminal para executar os comandos abaixo no terminal anterior tem que está rodando o server com nodemon

para criar a database:
    npx sequelize-cli db:create
para criar as migrations no bd:
    npx sequelize-cli db:migrate
