async function consultandoUser() {


  const retornouser = await fetch(
    `https://ficha-terminologica-backend.herokuapp.com/users/list`
  );
  Users = await retornouser.json();

  var login = localStorage.getItem("nomeuser");
  // var tipouser = localStorage.getItem("tipouser");
  mostraruser(login);

  //mostrar(nome)
  console.log(login);
  //console.log(nome)
}


function mostraruser(mostrar_user) {
  document.querySelector("#nome_usuario").innerHTML = mostrar_user;
 }



 consultandoUser();

 