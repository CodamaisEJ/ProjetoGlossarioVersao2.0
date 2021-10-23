const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsImlhdCI6MTYzNDQ4MDk0OSwiZXhwIjoxNjM0NTY3MzQ5fQ.xGPRFl9iCQ8RG6JOHQJHobDEhNkrEvk7pgoYMZwgoVo";


const notificationslist = document.querySelector("#tabela");
let Notifications;
let NotificacaoHTML;

async function consultaNotifications() {
  const retorno = await fetch(
    "https://ficha-terminologica-backend.herokuapp.com/notifications/list"
  );
  let Notifications = await retorno.json();

  console.log(Notifications);

  ListNotications(Notifications);

  
}

function ListNotications(Notificacaos) {
  Notificacaos.forEach((Notificacao) => {
    NotificacaoHTML = `
        
         <td>${Notificacao.situacao_termo}</td>
         <td>${Notificacao.fk_id_termo}</td>
         <td>${Notificacao.updatedAt}</td>      
      `;
    
      notificationslist.innerHTML += NotificacaoHTML   
  });
  
}

consultaNotifications();