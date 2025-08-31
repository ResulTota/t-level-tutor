function jumpToSection() {  
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const section = document.getElementById('sections').value;
        if (section) {
            window.location.hash = section;
        }
    });
}