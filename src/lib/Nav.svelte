<script>
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<main>
  <div class="container">
    <header class="col-md4 d-flex flex-wrap align-items-center justify-content-center justify-content-md-between pt-3 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img class="img-fluid" src="../../img/logoiesfseif (1).png" alt="logo azarquiel">
      </a>
      <ul class="nav col-14 justify-content-center mb-md-0 d-sm-none d-md-flex prueba">
        <li><a href="#" class="nav-link px-2 link-secondary">INICIO</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">AL DÍA</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">EL LORO</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">EL CENTRO</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">SECRETARÍA</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">FAMILIAS</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">BOLSA</a></li>
      </ul>

      <button type="button" data-bs-toggle="offcanvas" data-bs-target="#demo" class="prueba2">
        <i class="fa-solid fa-bars fa-2x"></i>
      </button>

      <div class="offcanvas offcanvas-start text-bg-dark" id="demo">
        <div class="offcanvas-header">
          <h1 class="offcanvas-title">MENU</h1>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
          <ul>
            <li><a href="#" class="linknone">INICIO</a></li>
            <li><a href="#" class="linknone">AL DÍA</a></li>
            <li><a href="#" class="linknone">EL LORO</a></li>
            <li><a href="#" class="linknone">EL CENTRO</a></li>
            <li><a href="#" class="linknone">SECRETARÍA</a></li>
            <li><a href="#" class="linknone">FAMILIAS</a></li>
            <li><a href="#" class="linknone">BOLSA</a></li>
          </ul>
        </div>
      </div>

    </header>
  </div>
</main>

<style lang="sass">

  .prueba2
    display: none
    background-color: transparent
    border: none
    color: inherit
    padding: 0
    font: inherit
    cursor: pointer

  .linknone
    color: inherit
    text-decoration: inherit

  @media (max-width: 600px)
    .prueba
      display: none
    .prueba2
      display: flex
 
</style>