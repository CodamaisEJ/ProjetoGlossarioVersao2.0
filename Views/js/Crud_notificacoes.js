const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsImlhdCI6MTYzNDQ4MDk0OSwiZXhwIjoxNjM0NTY3MzQ5fQ.xGPRFl9iCQ8RG6JOHQJHobDEhNkrEvk7pgoYMZwgoVo";


const notificationslist = document.getElementById("#tabela");
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
        
         <td>${Notificacao[0].NotificacaoTermo.situacao_termo}</td>
            
      `;
    
      notificationslist.innerHTML += NotificacaoHTML   
  });
  
}

consultaNotifications();