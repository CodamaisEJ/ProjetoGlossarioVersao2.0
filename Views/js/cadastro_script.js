function mudaCor() {
  var x = localStorage.getItem("tipoUsuario");
  if (x == 1) {
      var backgroundColor = "#314C85";
      document.getElementById("header").style.backgroundColor = backgroundColor;
      document.getElementById("footer").style.backgroundColor = backgroundColor;
      document.getElementById("alt").style.display = "block";
      document.getElementById("block").style.display = "block";  
  }
  if (x == 2) {
      var backgroundColor = "#0D4F3F";
      document.getElementById("header").style.backgroundColor = backgroundColor;
      document.getElementById("footer").style.backgroundColor = backgroundColor;
      var sub_titulo = document.querySelector("#sub_titulo");
      document.getElementById("alt").style.display = "none";
      document.getElementById("block").style.display = "none";  
     
  }
  if (x == 3) {
      var backgroundColor = "#430D64";  
      document.getElementById("header").style.backgroundColor = backgroundColor;
      document.getElementById("footer").style.backgroundColor = backgroundColor;
      document.getElementById("alt").style.display = "none";
      document.getElementById("block").style.display = "none";
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