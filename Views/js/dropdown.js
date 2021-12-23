async function consultandoUser() {


  const retornouser = await fetch(
    `https://ficha-terminologica-backend.herokuapp.com/users/list`
  );
  Users = await retornouser.json();

  var login = localStorage.getItem("motrar_user");
  
  
   mostraruser(login)
   
   //console.log(tipouser)
 //  console.log(user_autor)
}


function mostraruser(nome_usuario) {
  document.querySelector("#nome_usuario").innerHTML = nome_usuario;
  
 }
 consultandoUser();

 

  