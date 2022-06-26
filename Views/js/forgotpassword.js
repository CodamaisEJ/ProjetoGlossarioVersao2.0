
var login = localStorage.getItem("motrar_senha");
console.log(login)

var send = localStorage.getItem("motrar_email");
console.log(send)

 async function editarsenha(event) {
  const user_id = history.state;
  
  event.preventDefault();
  
  const form = document.forms["tela_login"];
  var senha = form["password"].value;
  var data = {
    senha,
  };

  try {
    const result = await fetch(
      `https://ficha-terminologica-backend.herokuapp.com/user/${user_id}/update`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (result.ok) {
      enviar(senha, send);
        Email.send({
        Host : "smtp-relay.sendinblue.com",
        Username : "codamais.ej@gmail.com",
        Password : "ZYHc1FWBXa6PbAfg",
        port: 587,
        To : send,
        From : "codamais.ej@gmail.com",
        Subject : "Senha Ficha Terminológica",
        Body : ` Esta é sua senha de acesso ao sistema da Ficha <br>
                Terminológica:  ${senha} `
        }).then(
             
        );   
      alert("Nova senha enviada para o seu e-mail");
      
      
      //window.location.href = "/send-email";    
     // window.location.href = "tela_login.html";
      
    } 
  } catch (error) {
   
    console.log(`error.message`, error.message);
  }
 }

