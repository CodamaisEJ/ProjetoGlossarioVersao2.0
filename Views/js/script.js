function trocaPaginaAdmin(){
  var getInput = 1;
  localStorage.setItem("StorageName",getInput);
  location.href= "tela-login.html";
}
function trocaPaginaProf(){
    var getInput = 2;
    localStorage.setItem("StorageName",getInput);
    location.href= "tela-login.html";
}
function trocaPaginaOthers(){
    var getInput = 3;
    localStorage.setItem("StorageName",getInput);
    location.href = "tela-login.html";
}
