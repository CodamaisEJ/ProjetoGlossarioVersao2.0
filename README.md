# Projeto Ficha Terminológica Lexic
Atualização de um sistema já existente.

## 🚀 Passos para executar o projeto
Olá 🐱‍🏍, seguem esses passos abaixo para startar o prototipo do sistema: 


### OBS: 
Chequem, o arquivo <code>config.json</code> que está em: <code>/src/config</code>, este arquivo é onde está a credenciais do bd, o nome de usuario do banco de dados que no meu caso é o postgres e a senha,
chequem para ver se são as mesmas credenciais do banco de voces.

Para instalar as dependencias:

    npm install

Para startar rode:

    npm run dev

## Atenção 💣
 #### Se houver informado alguma modificação no banco de dados rodem o comando abaixo antes das alterações ou antes de fazerem um pull dessa branch, nunca depois de fazer ou receberem as alterações.
       npx sequelize-cli db:migrate:undo:all
 ### Criem outro terminal para executar os comandos abaixo, pois no terminal anterior tem que está rodando o server com nodemon!

Para criar a database:
    
    npx sequelize-cli db:create
    

Para criar as migrations no bd:

    npx sequelize-cli db:migrate
    
### Para acessar as rotas utilize o insominia, com o insominita aberto coloque o localhost:3000/ depois do / é a rota que deseja acessar, abaixo a um exemplo das rotas de:
  #### Exemplo: Essa rota abaixo lista os termos existente no banco de dados!
    localhost:3000/terms/list
  ### OBS: se forem utilizar as rotas de update e delete que possui **:id** substitutem pelo id que está no banco de dados
  
  ### Exemplo para atualizar o termo de id 1:
    localhost:3000/term/1/update
    
  ### Exemplo para deletar o termo de id 1:
    localhost:3000/term/1/delete
    
  ### Rotas de termos:
    
    /terms/list
    /term/create
    /term/:id/update
    /term/:id/delete
    
  ### Rotas de usuários:
    
    /users/list
    /user/create
    /token/create
    /user/:id/update
    /user/:id/delete
    
### Nomes para serem informados no corpo da requisição nas rotas de criar e atualizar de:
   #### Exemplo de uso, procure o body da requisição no postman ou insomnia ou outro programa que esteja utilizando para testar as rotas, depois de achar coloque para json dentro do body, depois voces devem utilizar assim como o exemplo abaixo de json e depois clicar em submeter ou enviar.
    {
        "area": "Covid-19"
    }
   
   ### Termos:
    area
    categoria_gramatical
    data_de_registro
    entrada
    genero
    nota
    nota2
    redator
    remissiva
    hiponimo
    hiperonimo
    co_hiponimo
    termo_ingles
    termo_italiano
    termo_espanhol
    termo_frances
    termo_alemao
    numero
    revisao_especialista
    data_da_ultima_revisao
    freq_no_termo_corpus
    autor
    revisao_linguistica
    proposta_de_revisao
    fonte_da_definicao
    fonte_dicionario_especializado1
    fonte_dicionario_especializado2
    fonte_dicionario_lingua_comum
    fonte_proposta_de_definicao
    fonte_do_contexto_de_uso
    fonte_do_contexto_de_uso1
    fonte_do_contexto_de_uso2
    fonte_do_contexto_de_uso3
    contexto_de_uso
    contexto_de_uso1
    contexto_de_uso2
    contexto_de_uso3
    proposta
    definicao
    dicionario_especializado1
    dicionario_especializado2
    dicionario_lingua_comum
    proposta_de_definicao
    variantes
    ortografica
    geografica
    sinomica
    siglas
    acronimos
    situacao_termo
    
   ### Usuários:
    nome
    email
    senha
    tipo_de_usuario

### Para criar um token utilize a rota abaixo exemplo:
    localhost:3000/token/create
    
### Dentro do insomnia acessando a rota acima, no corpo da requisição coloque o json como exemplo abaixo, substitua: Email registrado no banco igual e Senha igual a registrada no banco, pelas credenciais que foi criado o usuário no seu banco, lembrando tem que ter criado o usuário na rota de criar usuário:
    {
      "email": "Email registrado no banco igual",
      "senha": "Senha igual a registrada no banco"
    }
### Parâmetros da rota criar token:
    /token/create
   
### Para alterar os dados do usuário informe a senha atual no caso do tipo de usuario não ser admin lembrando substitua o :id pelo id do usuário cadastrado no banco

    localhost:3000/user/:id/updatemydata

**No corpo da requisição o <code>passwordCurrentBody</code> é a senha atual** 

### Para listar 1 usuario e seus os dados lembrando substitua o :id pelo id do usuário cadastrado no banco

    localhost:3000/user/:id/list

### Para listar 1 termo e seus os dados lembrando substitua o :id pelo id do termo cadastrado no banco

    localhost:3000/user/:id/list


### Rotas para recuperar a senha

***Nessa rota ira enviar o email com o token para a conta que o Léo criou no mailtrap.io***

**Informe o email do usuario existente dentro das aspas duplas vazia** 

    user/forgotpassword/create

    {
      "email": ""
    }

**Depois de anotado o email e o token que foi enviado para a conta que o Léo criou no mailtrap.io, informe nas aspas duplas a cada respectivo item**

**Resetar a senha**

    **user/forgotpassword/reset

    {
        "email": "",
        "token": "",
        "senha": ""
    }


### Em fogotPassword.html troque o site.com pelo site que voce tem já criado
