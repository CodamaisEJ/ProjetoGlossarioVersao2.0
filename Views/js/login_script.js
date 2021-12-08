function mudaCor() {
  var x = localStorage.getItem("tipoUsuario");
  console.log(x);
  if (x == 1) {
    var backgroundColor = "#314C85";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("acesso").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
  if (x == 2) {
    var backgroundColor = "#0D4F3F";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("acesso").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
  if (x == 3) {
    var backgroundColor = "#430D64";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("acesso").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
}


async function consultaUsers() {
  const retornouser = await fetch(
    "https://ficha-terminologica-backend.herokuapp.com/users/list"
  );
  const Users = await retornouser.json();
  ListUsers(Users);
  
}

let UserHTML;




function ListUsers(Users) {
  Users.forEach((User) => {   

    var z = localStorage.getItem("tipoUsuario");
    if (z == 1) {
      var x = document.querySelector("#user");
     
      
      var y = document.querySelector("#password");
      var adm = "administrador"
      var user = x.value;
      var password = y.value;

      if (user === User.email && password === User.senha && adm == User.tipo_de_usuario) {
       
        var value = 1;
        localStorage.setItem("tipoUsuario", value);

        user_id = User.nome
        localStorage.setItem("motrar_user", user_id);
       
        console.log(User.nome)
        location.href = "tela_termos.html";
       
      }
    } 

    var z = localStorage.getItem("tipoUsuario");
    if (z == 2) {
      var x = document.querySelector("#user");

      
      var y = document.querySelector("#password");
      var adm = "pesquisador"
      var admin = "administrador"
      var user = x.value;
      var password = y.value;

      if (user === User.email && password === User.senha && adm == User.tipo_de_usuario ) {
       
        var value = 2;
        localStorage.setItem("tipoUsuario", value);

        

        location.href = "termo.html";
      } 
    } 

    var z = localStorage.getItem("tipoUsuario");
    if (z == 3) {
      var x = document.querySelector("#user");
      
      var y = document.querySelector("#password");
      var adm = "especialista"
      var admin = "administrador"
      var user = x.value;
      var password = y.value;

      if (user === User.email && password === User.senha && adm == User.tipo_de_usuario) {
       
        var value = 3;
        localStorage.setItem("tipoUsuario", value);

        user_id = User.nome
        localStorage.setItem("motrar_user", user_id);

        location.href = "tela_termos_especialista.html";
      }
    } 
  });
}


function mostrarsenha(){
    var senha = document.getElementById("password");
    if(senha.type == "password"){
      senha.type = "text";
    }else{
      senha = "password";
    }

}