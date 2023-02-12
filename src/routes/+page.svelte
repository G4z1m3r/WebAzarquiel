<script>
  import Card from "../lib/Card.svelte";
  import Intro from "../lib/Intro.svelte";
  import MainTemplate from "../templates/+layout.svelte";
  import Layout from "../templates/+layout.svelte";
</script>


  <div class="prueba">
    <MainTemplate>
    <div class="pb-5">
      <Intro titulo="Cursos de especialización" />
    </div>
  
    <!-- <div class="d-flex justify-content-center align-items-space-evenly "> -->
      <div class="cartas d-flex pb-5" style="width: 100%">
        <!-- <div class="container-fluid"> -->
          <div class=" col-sm-6 col d-flex justify-content-center align-items-center cartilla">
            <a href="/videojuegos">
              <Card
              sourc="../../img/videojuegos.jpg"
              alternative="Imagen promocional videojuedos"
              titulo="Curso de videojuegos"
              texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum ante vel dignissim hendrerit. "
            />
            </a>
          </div>
    
          <div class=" col-sm-6 col d-flex justify-content-center align-items-center cartilla">
            <a href="/ciberseguridad">
              <Card
              sourc="../../img/ciberseguridad.jpg"
              alternative="Imagen promocional ciberseguridad"
              titulo="Curso de Ciberseguridad"
              texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum ante vel dignissim hendrerit. "
            />
            </a>
          </div>
        <!-- </div> -->
        
      </div>
    <!-- </div> -->
  </MainTemplate>
  </div>


<style lang="sass">

  .d-flex 
    display: flex
    flex-direction: row
    flex-wrap: wrap
  .cartas
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: center
    // column-gap: 2rem

  .cartilla
    width: 30%

  a
    text-decoration: none
    color: black
    
  @media (max-width: 600px)
    .cartas
      flex-direction: column
      margin: 0
      padding: 0
      row-gap: 2rem

    .prueba
      max-width: 100vw

</style>
