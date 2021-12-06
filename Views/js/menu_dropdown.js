function myFunction() {
  document.getElementById("dropdown").style.right = "0px";
  document.getElementById("dropdown").style.marginRight = "3.5rem";
  document.getElementById("myDropdown").classList.toggle("show");
  var Switch = document.getElementById("dropbtn");
  var toggled = document.getElementById("myDropdown");
}
var x = localStorage.getItem("tipoUsuario");
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
              document.getElementById("dropdown").style.position = "relative";
              document.getElementById("dropdown").style.right = "0px";
              document.getElementById("dropdown").style.marginTop = "0rem";
              document.getElementById("dropdown").style.marginRight = "3.5rem";
              
          }
      }
  }
}

