function mudaCor(){
  var x = localStorage.getItem("StorageName");
  if(x == 1){
<<<<<<< HEAD
    var backgroundColor = "#186EEF";
=======
    var backgroundColor = "#314C85";
>>>>>>> 34cbf17489cdd275d6016646ed28f1e5a1fb0c65
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("acesso").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
  if(x == 2){
<<<<<<< HEAD
    var backgroundColor = "#430D64";
=======
    var backgroundColor = "#0D4F3F";
>>>>>>> 34cbf17489cdd275d6016646ed28f1e5a1fb0c65
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("acesso").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
  if(x == 3){
<<<<<<< HEAD
    var backgroundColor = "#0D4F3F";
=======
    var backgroundColor = "#430D64";
>>>>>>> 34cbf17489cdd275d6016646ed28f1e5a1fb0c65
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
<<<<<<< HEAD
=======
      var value = 1;
      localStorage.setItem("StorageName",value);
>>>>>>> 34cbf17489cdd275d6016646ed28f1e5a1fb0c65
    }
    else{
      window.alert("Usuário ou senha incorretos!")
    }
  }
  if(z == 2){
<<<<<<< HEAD
    var usuario = 'Prof';
=======
    var usuario = 'Pesquisador';
>>>>>>> 34cbf17489cdd275d6016646ed28f1e5a1fb0c65
    var senha = '123';
  
    var x = document.querySelector("#user");
    var y = document.querySelector("#password");
  
    var user = x.value;
    var password = y.value;
  
    if(user === usuario && password === senha){
      location.href = "tela-cadastro.html"
<<<<<<< HEAD
=======
      var value = 2;
      localStorage.setItem("StorageName",value);
>>>>>>> 34cbf17489cdd275d6016646ed28f1e5a1fb0c65
    }
    else{
      window.alert("Usuário ou senha incorretos!")
    }
  }
  if(z == 3){
<<<<<<< HEAD
    var usuario = 'Outros';
=======
    var usuario = 'Especialista';
>>>>>>> 34cbf17489cdd275d6016646ed28f1e5a1fb0c65
    var senha = '123';
  
    var x = document.querySelector("#user");
    var y = document.querySelector("#password");
  
    var user = x.value;
    var password = y.value;
  
    if(user === usuario && password === senha){
      location.href = "tela-cadastro.html"
<<<<<<< HEAD
=======
      var value = 3;
      localStorage.setItem("StorageName",value);
>>>>>>> 34cbf17489cdd275d6016646ed28f1e5a1fb0c65
    }
    else{
      window.alert("Usuário ou senha incorretos!")
    }
  }
}