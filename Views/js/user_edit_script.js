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


async function carregarDadosUsuario() {
  const user_id = history.state;

  try {
    const result = await fetch(
      `https://ficha-terminologica-backend.herokuapp.com/user/${user_id}/list`
    );

    const json = await result.json();

    const form = document.forms["edit_user"];

    form["complete_name"].value = json.nome;
    form["email"].value = json.email;
    form["type_user_group"].value = json.tipo_de_usuario;
    form["password"].value = json.senha;
    

    console.log(`dados do usuário carregados`);
  } catch (error) {
    console.log(`Erro ao carregar dados do usuário`, error);
  }
}

async function editarUsuario(event) {
  const user_id = history.state;

  

  const form = document.forms["edit_user"];

  const nome = form["complete_name"].value;
  const email = form["email"].value;
  const tipo_de_usuario = form["type_user_group"].value;
  const senha = form["password"].value;

  if (nome === "" || email === "" || tipo_de_usuario === "") {
    alert("Por favor preencha os campos.");
    
  }

  const data = {
    nome,
    email,
    tipo_de_usuario,
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


