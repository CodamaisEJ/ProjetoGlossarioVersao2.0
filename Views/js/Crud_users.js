const Userslist = document.querySelector("#tabela");

async function consultaUsers() {
  const retorno = await fetch(
    "https://ficha-terminologica-backend.herokuapp.com/users/list"
  );
  const Users = await retorno.json();
  ListUsers(Users);
}

let UserHTML;

function ListUsers(Users) {
  Users.forEach((User) => {
    UserHTML = `
      
      <div class="bg"" id="users${User.id}">  

           <td>${User.nome}</td>
           <td>${User.tipo_de_usuario}</td>
           <td>${User.email}</td>
           <td>
            <i 
              class="fas fa-pencil-alt" 
              id="lapis" 
              onclick="irParaTelaEditarUsuario(${User.id})"
            >
            </i>
            <i 
              class="fas fa-trash-alt"
              id="lixeira"
              onclick="DeletandoUser(${User.id})">
            </i>          
           </td>          
      </div>
      
      
      `;

    Userslist.innerHTML = Userslist.innerHTML + UserHTML;
  });
}

async function DeletandoUser(user_id) {
  const retorno = await fetch(
    `https://ficha-terminologica-backend.herokuapp.com/user/${user_id}/delete`,
    { method: "delete" }
  );
  const json = await retorno.json();
  alert("" + json.message);
  console.log(json);
  DeleteUsers(user_id);
  location.reload();
}

function DeleteUsers(user_id) {
  const el_user = document.querySelector(`#users${user_id}`);
  Userslist.removeChild(el_user);
  location.reload();
}

consultaUsers();

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
