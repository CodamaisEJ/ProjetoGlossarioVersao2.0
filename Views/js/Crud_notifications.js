const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsImlhdCI6MTYzNDQ4MDk0OSwiZXhwIjoxNjM0NTY3MzQ5fQ.xGPRFl9iCQ8RG6JOHQJHobDEhNkrEvk7pgoYMZwgoVo";

const notificationslist = document.querySelector("#tabela tbody");
let Notifications;
let NotificacaoHTML;

async function consultaNotifications() {
  const retorno = await fetch(
    "https://ficha-terminologica-backend.herokuapp.com/notifications/list"
  );
  let Notifications = await retorno.json();

  ListNotications(Notifications);
}

function ListNotications(Notificacaos) {
  Notificacaos.forEach((Notificacao) => {
    NotificacaoHTML = ` 
         <tr class="bg">      
            <td>${Notificacao.termo}</td>
            <td>${Notificacao.status}</td>
            <td>${Notificacao.usuario}</td>      
            <td>${Notificacao.data}</td> 
            <br>  
         </tr>     
      `;
    notificationslist.innerHTML += NotificacaoHTML;
  });
}

consultaNotifications();

function voltar() {
  location.href = "tela_termos.html";
}

function voltarTermo() {
  location.href = "termo.html";
}
