// default header for all pages on the site (bootstrap)

function injectFooter () {
  let footerInjectDiv = document.createElement('div');
  footerHTML = `<div class="footer mt-auto container-md">
  <!-- Footer -->
  <footer class="bg-link text-center ">
    <!-- Grid container -->
    <div class="container p-4">

      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Linkedin -->
        <a class="btn btn-primary btn-floating m-1" style="background-color: #0082ca" href="https://www.linkedin.com/in/michael-tietje-7a1b3569/" role="button" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        <!-- Github -->
        <a class="btn btn-primary btn-floating m-1" style="background-color: #333333" href="https://github.com/mk-tg" role="button" target="_blank"><i class="fab fa-github"></i></a>
      </section>
      <!-- Section: Social media -->




    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.1)">
      © 2021 Copyright:
      <a class="text-dark" href="mk-tg.github.io" target="_blank">Mike Tietje</a>
    </div>
    <!-- Copyright -->

  </footer>
  <!-- Footer -->
</div>`;

footerInjectDiv.innerHTML += footerHTML;

document.getElementById('footer').appendChild(footerInjectDiv);

}

injectFooter();