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
  location.href = "tela_usuarios.html";
}

async function cadastrarUsuario(event) {
  event.preventDefault();
  const form = document.forms["create_user"];

  const nome = form["complete_name"].value;
  const email = form["email"].value;
  const tipo_de_usuario = form["type_user_group"].value;
  const senha = form["password"].value;

  if (nome === "" || email === "" || tipo_de_usuario === "") {
    alert("Por favor preencha os campos.");
    return;
  }

  const data = {
    nome,
    email,
    tipo_de_usuario,
    senha,
  };

  try {
    const result = await fetch(
      "https://ficha-terminologica-backend.herokuapp.com/user/create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (result.ok) {
      alert("Usuário cadastrado com sucesso.");
      trocarPagina();
    } else {
      alert("Usuário já existe.");
    }
  } catch (error) {
    alert("Erro ao cadastrar usuário");
    console.log(`error.message`, error.message);
  }
}

function gerarSenhaAleatoriaParaUsuario() {
  const input_password = document.forms["create_user"]["password"];
  input_password.value = Math.random().toString(36).substr(2, 8).toUpperCase();
}
