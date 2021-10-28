// default header for all pages on the site (bootstrap)

function injectHeader () {
  let headerInjectDiv = document.createElement('div');
  headerHTML = `<div class="container-md">
  <nav class="navbar navbar-expand-xxl navbar-light bg-light">
    <div class="container-fluid">
        <a href="#" class="navbar-brand">Michael Tietje</a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="nav-item">
                    <a href="./intro.html" class="nav-link">Introduction</a>
                </li>
                <li class="nav-item">
                    <a href="./bio.html" class="nav-link">Bio</a>
                </li>
                <li class="nav-item">
                    <a href="./experience.html" class="nav-link">Professional Experience</a>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Projects</a>
                    <div class="dropdown-menu">
                        <a href="./pacman.html" class="dropdown-item">Pacman</a>
                        <a href="./css-eye.html" class="dropdown-item">CSS Eye</a>
                        <a href="./bus-tracker.html" class="dropdown-item">Bus Tracker</a>
                        <div class="dropdown-divider"></div>
                        <a href="https://github.com/mk-tg" target="_blank" class="dropdown-item">GitHub Profile</a>
                        <a href="./project.html" class="dropdown-item">Project Directory</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </nav>
</div>`;

headerInjectDiv.innerHTML += headerHTML;

document.getElementById('header').appendChild(headerInjectDiv);

}

injectHeader();