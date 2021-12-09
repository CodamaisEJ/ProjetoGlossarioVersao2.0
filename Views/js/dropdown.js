async function consultandoUser() {


  const retornouser = await fetch(
    `https://ficha-terminologica-backend.herokuapp.com/users/list`
  );
  Users = await retornouser.json();

  var login = localStorage.getItem("motrar_user");
  // var tipouser = localStorage.getItem("tipouser");
   mostraruser(login)
   console.log(login)
}


function mostraruser(nome_usuario) {
  document.querySelector("#nome_usuario").innerHTML = nome_usuario;
 }



 consultandoUser();

 