function trocaPaginaAdmin(){
  var value = 1;
  localStorage.setItem("StorageName",value);
  location.href= "tela-login.html";
}
function trocaPaginaPesquisador(){
    var value = 2;
    localStorage.setItem("StorageName",value);
    location.href= "tela-login.html";
}
function trocaPaginaEspecialista(){
    var value = 3;
    localStorage.setItem("StorageName",value);
    location.href = "tela-login.html";
}
