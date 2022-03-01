var login = localStorage.getItem("motrar_senha");
console.log(login)

var send= localStorage.getItem("motrar_email");
console.log(send)





async function editarsenha(event) {
  const user_id = history.state;

  event.preventDefault();
  
  const form = document.forms["tela_login"];

 
  const senha = form["password"].value;



  const data = {
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

        Email.send({
        Host : "smtp.gmail.com",
        Username : "lionidiota@gmail.com",
        Password : "ynxfucisxpkrzors",
        To : send,
        From : "codamais.ej@gmail.com",
        Subject : "Senha Ficha Terminológica",
        Body : ` Esta é sua senha de acesso ao sistema da Ficha <br>
                Terminológica:  ${senha} `
        }).then(
             
        );

       
      alert("Nova senha enviada para o seu e-mail");

      window.location.href = "tela_login.html";
      
    } 
  } catch (error) {
   
    console.log(`error.message`, error.message);
  }
}

function enviar(){

    Email.send({
    Host : "smtp.gmail.com",
    Username : "lionidiota@gmail.com",
    Password : "ynxfucisxpkrzors",
    To : send,
    From : "codamais.ej@gmail.com",
    Subject : "Senha Ficha Terminológica",
    Body : ` Esta é sua senha de acesso ao sistema da Ficha <br>
            Terminológica:  ${senha} `
    }).then(
         
    );
}