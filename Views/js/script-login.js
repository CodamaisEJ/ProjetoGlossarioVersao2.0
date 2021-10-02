function mudaCor(){
  var x = localStorage.getItem("StorageName");
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
  var z = localStorage.getItem("StorageName");
  if(z == 1){
    var usuario = 'Admin';
    var senha = '123';
  
    var x = document.querySelector("#user");
    var y = document.querySelector("#password");
  
    var user = x.value;
    var password = y.value;
  
    if(user === usuario && password === senha){
      location.href = "tela-cadastro.html"
    }
    else{
      window.alert("Usuário ou senha incorretos!")
    }
  }
  if(z == 2){
    var usuario = 'Pesquisador';
    var senha = '123';
  
    var x = document.querySelector("#user");
    var y = document.querySelector("#password");
  
    var user = x.value;
    var password = y.value;
  
    if(user === usuario && password === senha){
      location.href = "tela-cadastro.html"
    }
    else{
      window.alert("Usuário ou senha incorretos!")
    }
  }
  if(z == 3){
    var usuario = 'Especialista';
    var senha = '123';
  
    var x = document.querySelector("#user");
    var y = document.querySelector("#password");
  
    var user = x.value;
    var password = y.value;
  
    if(user === usuario && password === senha){
      location.href = "tela-cadastro.html"
    }
    else{
      window.alert("Usuário ou senha incorretos!")
    }
  }
}