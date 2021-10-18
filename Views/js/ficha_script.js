function mudaCor(){
  var x = localStorage.getItem("tipoUsuario");
  if(x == 1){
    var backgroundColor = "#314C85";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
  if(x == 2){
    var backgroundColor = "#0D4F3F";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
  if(x == 3){
    var backgroundColor = "#430D64";
    document.getElementById("header").style.backgroundColor = backgroundColor;
    document.getElementById("footer").style.backgroundColor = backgroundColor;
  }
}