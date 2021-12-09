function mudaCor(){
  var x = localStorage.getItem("tipoUsuario");
  if(x == 1){
    var backgroundColor = "#314C85";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
  if(x == 2){
    var backgroundColor = "#0D4F3F";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
  if(x == 3){
    var backgroundColor = "#430D64";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
}
function trocarPagina(){
  location.href= "tela_cadastrar_termos.html";
}
function trocarPagina1(){
  location.href= "tela_criar_usuarios.html";
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