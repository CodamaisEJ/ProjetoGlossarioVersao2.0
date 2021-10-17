function myFunction() {
    document.getElementById("dropdown").style.right = "0px";
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                document.getElementById("links").style.marginRight = "-27rem"
                document.getElementById("dropdown").style.position = "relative";
                document.getElementById("dropdown").style.right = "0px";
                document.getElementById("dropdown").style.marginTop = "0rem";
                document.getElementById("dropdown").style.marginRight = "1rem";
                document.getElementById("logo_notificacao").style.display = "flex";
            }
        }
    }
}