function jumpToSection() { 
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const section = document.getElementById('sections').value;
    if (section) {
        window.location.hash = section;
    }
  })
};

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

    let darkmode = localStorage.getItem('darkmode')
    const themeSwitch = document.getElementById('theme-switch')

    const enableDarkmode = () => {
      document.body.classList.add('darkmode')
      localStorage.setItem('darkmode', 'active')
    }

    const disableDarkmode = () => {
      document.body.classList.remove('darkmode')
      localStorage.setItem('darkmode', null)
    }

    if(darkmode === "active") enableDarkmode()

    themeSwitch.addEventListener("click", () => {
      darkmode = localStorage.getItem('darkmode')
      darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    })
