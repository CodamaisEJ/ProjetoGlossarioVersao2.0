function mudaParaVermelho(header) {
  header.style.backgroundColor = "#FF0F0F";
}

function mudaParaAmarelo(td) {
  td.style.backgroundColor = "#FFFA00";
}

function mudaParaVerde(td) {
  td.style.backgroundColor = "#31FF4E";
}

function mudaCor(header){
  var cor = document.getElementById('#admin')

  if (cor == 10){
      mudaParaVermelho(td);
  }
  else if (quantidadeDeDias < 15){
      mudaParaAmarelo(td);
  }
  else
    mudaParaVerde(td);
}

