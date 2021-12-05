mudando = () => {

  // verificar o estado da variavel sino 
  sino = 0
  localStorage.setItem("notifica", sino);

  location.href = "tela_notificacoes_pesquisador.html";
console.log(sino)
}

var sinomuda = 0
    localStorage.setItem("mudandosino", sinomuda);

function mudaSino() {
  var sino = localStorage.getItem("notifica");
  console.log(sino);

  var img = document.getElementById('sin')
  if (sino == 1) {
      
      img.src ='./img/sino.png';
  } 
  if (sino == 0) {
      
  }
  console.log(sino) 
}