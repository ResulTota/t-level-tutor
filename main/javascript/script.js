function jumpToSection() {  
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const section = document.getElementById('sections').value;
        if (section) {
            window.location.hash = section;
        }
    });
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}