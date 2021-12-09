function mudaCor() {
  var x = localStorage.getItem("tipoUsuario");

  if (x == 1) {
    var backgroundColor = "#314C85";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
  if (x == 2) {
    var backgroundColor = "#0D4F3F";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
  if (x == 3) {
    var backgroundColor = "#430D64";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
}

function trocarPagina() {
  location.href = "tela_termos.html";
}




async function editarUsuario(event) {
  const user_id = history.state;

  event.preventDefault(); 

  const data = document.forms["edit_user"];

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
      alert("Usuário editado com sucesso.");
      location.href = "tela_usuarios.html";
    } else {
      alert("Usuário já existe.");
    }
   
  } catch (error) {
    alert("Erro ao cadastrar usuário");
    console.log(`error.message`, error.message);
  }
 
}

function deslogar() {
  location.href = "index.html";
}


