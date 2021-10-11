function mudaCor(){
  var x = localStorage.getItem("tipoUsuario");
  console.log(x)
  if(x == 1){
    var backgroundColor = "#314C85";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("acesso").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
  if(x == 2){
    var backgroundColor = "#0D4F3F";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("acesso").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
  if(x == 3){
    var backgroundColor = "#430D64";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("acesso").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
}

function validador(){
  var z = localStorage.getItem("tipoUsuario");
  if(z == 1){
    var usuario = '';
    var senha = '';
  
    var x = document.querySelector("#user");
    var y = document.querySelector("#password");
  
    var user = x.value;
    var password = y.value;
  
    if(user === usuario && password === senha){
      location.href = "tela_termos.html";
      var value = 1;
      localStorage.setItem("tipoUsuario",value);
    }
    else{
      window.alert("Usuário ou senha incorretos!")
    }
  }
  if(z == 2){
    var usuario = '';
    var senha = '';
  
    var x = document.querySelector("#user");
    var y = document.querySelector("#password");
  
    var user = x.value;
    var password = y.value;
  
    if(user === usuario && password === senha){
      location.href = "tela_termos.html"
      var value = 2;
      localStorage.setItem("tipoUsuario",value);
    }
    else{
      window.alert("Usuário ou senha incorretos!")
    }
  }
  if(z == 3){
    var usuario = '';
    var senha = '';
  
    var x = document.querySelector("#user");
    var y = document.querySelector("#password");
  
    var user = x.value;
    var password = y.value;
  
    if(user === usuario && password === senha){
      location.href = "tela_termos.html";
      var value = 3;
      localStorage.setItem("tipoUsuario",value);
    }
    else{
      window.alert("Usuário ou senha incorretos!")
    }
  }
}