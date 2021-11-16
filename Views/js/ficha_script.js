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
    document.getElementById("fechar").style.backgroundColor = backgroundColor;
    document.getElementById("salvar").style.backgroundColor = "#9D1C33";
    document.getElementById("alt").style.color = "#234F90";
    document.getElementById("alt").style.cursor = "pointer";
    document.getElementById("alt").style.marginBottom = "-15px";
    document.getElementById("block").style.display = "none";
    var user = document.querySelector("#status_user");
    user.innerHTML = "Pesquisador";
    var text = document.querySelector("#alt");
    text.innerHTML = "Voltar para a tela de Termos";
    document.getElementById("status").style.display = "none";
    document.getElementById("espaco").style.display = "none";
  }
  if (x == 3) {
    var backgroundColor = "#430D64";
    document.getElementById("dropdown").style.marginRight = "3.5rem";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
    document.getElementById("fechar").style.backgroundColor = backgroundColor;
    document.getElementById("salvar").style.backgroundColor = "#9D1C33";
    document.getElementById("logo_notificacao").style.display = "none";
    document.getElementById("alt").style.color = "#234F90";
    document.getElementById("alt").style.cursor = "pointer";
    document.getElementById("alt").style.marginBottom = "-10px";
    var text = document.querySelector("#alt");
    text.innerHTML = "Revisar Termos";
    document.getElementById("block").style.display = "none";
    var user = document.querySelector("#status_user");
    user.innerHTML = "Especialista";

    /* Altera a ficha */

    document.getElementById("nome-entrada").style.color = "#CBD3DF";
    document.getElementById("entrada").style.borderColor = "#CBD3DF";
    var input = document.querySelector("#entrada");
    input.disabled = true;
    document.getElementById("categoria").style.color = "#CBD3DF";
    document.getElementById("nome-cat").style.color = "#CBD3DF";
    document.getElementById("nome-cat1").style.color = "#CBD3DF";
    var radio = document.querySelector("#nome");
    radio.disabled = true;
    var radio1 = document.querySelector("#verbo");
    radio1.disabled = true;
    document.getElementById("genero").style.color = "#CBD3DF";
    document.getElementById("nome-gen").style.color = "#CBD3DF";
    document.getElementById("nome-gen1").style.color = "#CBD3DF";
    document.getElementById("nome-gen2").style.color = "#CBD3DF";
    var radio2 = document.querySelector("#masculino");
    radio2.disabled = true;
    var radio3 = document.querySelector("#feminino");
    radio3.disabled = true;
    var radio4 = document.querySelector("#dois-generos");
    radio4.disabled = true;
    document.getElementById("numero").style.color = "#CBD3DF";
    document.getElementById("nome-num").style.color = "#CBD3DF";
    document.getElementById("nome-num1").style.color = "#CBD3DF";
    var radio5 = document.querySelector("#singular");
    radio5.disabled = true;
    var radio6 = document.querySelector("#plural");
    radio6.disabled = true;
    document.getElementById("nome-variante").style.color = "#CBD3DF";
    document.getElementById("variante").style.borderColor = "#CBD3DF";
    var input1 = document.querySelector("#variante");
    input1.disabled = true;
    document.getElementById("nome-area").style.color = "#CBD3DF";
    document.getElementById("area").style.borderColor = "#CBD3DF";
    var input2 = document.querySelector("#area");
    input2.disabled = true;
    document.getElementById("remissiva").style.color = "#CBD3DF";
    document.getElementById("remissivas").style.borderColor = "#CBD3DF";
    var input3 = document.querySelector("#remissivas");
    input3.disabled = true;
    document.getElementById("nome-nota").style.color = "#CBD3DF";
    document.getElementById("nota").style.borderColor = "#CBD3DF";
    var input4 = document.querySelector("#nota");
    input4.disabled = true;
    document.getElementById("nome-autor").style.color = "#CBD3DF";
    document.getElementById("autor").style.borderColor = "#CBD3DF";
    var input5 = document.querySelector("#autor");
    input5.disabled = true;
    document.getElementById("nome-redador").style.color = "#CBD3DF";
    document.getElementById("redador").style.borderColor = "#CBD3DF";
    var input6 = document.querySelector("#redador");
    input6.disabled = true;
    document.getElementById("data1").style.color = "#CBD3DF";
    document.getElementById("data_registro").style.borderColor = "#CBD3DF";
    var input7 = document.querySelector("#data_registro");
    input7.disabled = true;
    document.getElementById("data2").style.color = "#CBD3DF";
    document.getElementById("data_ultima_revisao").style.borderColor =
      "#CBD3DF";
    var input8 = document.querySelector("#data_ultima_revisao");
    input8.disabled = true;
    document.getElementById("frequencia").style.color = "#CBD3DF";
    document.getElementById("frequencia_termo_corpus").style.borderColor =
      "#CBD3DF";
    var input9 = document.querySelector("#frequencia_termo_corpus");
    input9.disabled = true;
  }
}

function deslogar() {
  location.href = "index.html";
}

function trocaPagina() {
  location.href = "tela_termos.html";
}

function name(params) {}
