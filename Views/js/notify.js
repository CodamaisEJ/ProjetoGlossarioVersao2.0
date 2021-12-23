mudando = () => {

  // verificar o estado da variavel sino 
  sino = 0
  localStorage.setItem("notifica", sino);

  location.href = "tela_notificacoes.html";
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
  voltando_normal = 0
  localStorage.setItem("autor_",voltando_normal);
  localStorage.setItem("redator_",voltando_normal);

  console.log(sino) 
  console.log(voltando_normal) 
}