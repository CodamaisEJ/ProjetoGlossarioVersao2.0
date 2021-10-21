function mudaCor() {
  var x = localStorage.getItem("tipoUsuario");
  if (x == 1) {
      var backgroundColor = "#314C85";
      document.getElementById("header").style.backgroundColor = backgroundColor;
      document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
  if (x == 2) {
      var backgroundColor = "#0D4F3F";
      document.getElementById("header").style.backgroundColor = backgroundColor;
      document.getElementById("footer").style.backgroundColor = backgroundColor;
      document.getElementById("alt").style.color = "#234F90";
      document.getElementById("alt").style.cursor = "pointer";
      document.getElementById("alt").style.marginBottom = "-20px";
      var text = document.querySelector("#alt");
      text.innerHTML = " ";
      var titulo = document.querySelector("#titulo");
      titulo.innerHTML = "Termos"
      document.getElementById("criar_usuario").style.display = "none";
      document.getElementById("block").style.display = "none";
      var sub_titulo = document.querySelector("#sub_titulo");
      sub_titulo.innerHTML = "Últimos termos cadastrados:";
      var user = document.querySelector("#status_user");
      user.innerHTML = "Pesquisador";
     
  }
  if (x == 3) {
      var backgroundColor = "#430D64";
      document.getElementById("dropdown").style.marginRight = "3.5rem";
      document.getElementById("header").style.backgroundColor = backgroundColor;
      document.getElementById("footer").style.backgroundColor = backgroundColor;
      document.getElementById("logo_notificacao").style.display = "none";
      document.getElementById("cadastrar_termos").style.display = "none";
      document.getElementById("alt").style.color = "#234F90";
      document.getElementById("alt").style.cursor = "pointer";
      document.getElementById("alt").style.marginBottom = "-10px";
      var text = document.querySelector("#alt");
      
      var titulo = document.querySelector("#titulo");
    
      document.getElementById("criar_usuario").style.display = "none";
      document.getElementById("block").style.display = "none";
      var sub_titulo = document.querySelector("#sub_titulo");
      sub_titulo.innerHTML = "Total de termos: ";
      var user = document.querySelector("#status_user");
      user.innerHTML = "Especialista";
  }
}

function trocarPagina() {
  location.href = "tela_cadastrar_termos.html";
}

function trocarPagina1() {
  location.href = "tela_usuarios.html";
}

function deslogar() {
  location.href = "index.html";
}