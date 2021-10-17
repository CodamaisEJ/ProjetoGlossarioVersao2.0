const Termoslist = document.querySelector("#tela_termos");

async function consultaTerms() {
  const retorno = await fetch(
    "https://ficha-terminologica-backend.herokuapp.com/terms/list"
  );
  const Terms = await retorno.json();
  ListTerms(Terms);
}

let UserHTML;

function ListTerms(Termos) {
  Termos.forEach((Termo) => {
    TermoHTML = `
    
    <div class="termos">
    <div class="borda-termo">
      <div class="termo">
        <p onclick="trocarPagina()">${Termo.entrada}</p>
      </div>
      <i class="fas fa-trash" onclick="DeletandoTerms()"></i>
    </div> 
      `;
    Termoslist.innerHTML = Termoslist.innerHTML + TermoHTML;
  });
}

async function DeletandoTerms() {
  const retorno = await fetch(
    `https://ficha-terminologica-backend.herokuapp.com/term/2/delete`,
    { method: "delete" }
  );
  const json = await retorno.json();
  alert("" + json.message);
  console.log(json);
  DeleteTerms();
}

function DeleteTerms() {
  Termoslist.innerHTML = "";
}

consultaTerms();

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
      location.href = "tela_usuarios.html";
    } else {
      alert("Usuário já existe.");
    }
  } catch (error) {
    alert("Erro ao cadastrar usuário");
    console.log(`error.message`, error.message);
  }
}

function irParaTelaEditarUsuario(user_id) {
  history.pushState(user_id, "", "tela_editar_usuario.html");
  window.location.href = "tela_editar_usuario.html";
}

async function editarUsuario(event) {
  const user_id = history.state;

  event.preventDefault();

  const form = document.forms["edit_user"];

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

function gerarSenhaAleatoriaParaUsuario() {
  const input_password = document.forms["create_user"]["password"];
  input_password.value = Math.random().toString(36).substr(2, 8).toUpperCase();
}
