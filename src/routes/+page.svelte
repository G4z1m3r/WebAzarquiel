<script>
  import Card from "../lib/Card.svelte";
  import Intro from "../lib/Intro.svelte";
  import MainTemplate from "../templates/MainTemplate.svelte";
  import Layout from "../templates/MainTemplate.svelte";
</script>

<MainTemplate>
  <Intro titulo="Cursos de especialización" />
  <!-- <div class="d-flex justify-content-center align-items-space-evenly "> -->
    <div class="cartas d-flex pb-5" style="width: 100%">
      <!-- <div class="container-fluid"> -->
        <div class=" col-sm-6 col d-flex justify-content-center align-items-center cartilla">
          <Card
            sourc="../../img/videojuegos.jpg"
            alternative="Imagen promocional videojuedos"
            titulo="Curso de videojuegos"
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum ante vel dignissim hendrerit. "
          />
        </div>
  
        <div class=" col-sm-6 col d-flex justify-content-center align-items-center cartilla">
          <Card
            sourc="../../img/ciberseguridad.jpg"
            alternative="Imagen promocional ciberseguridad"
            titulo="Curso de Ciberseguridad"
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum ante vel dignissim hendrerit. "
          />
        </div>
      <!-- </div> -->
      
    </div>
  <!-- </div> -->
</MainTemplate>

<style lang="sass">
 
  $d: 700ms
  $e: cubic-bezier(0.19, 1, 0.22, 1)
  $bp-md: 600px
  $bp-lg: 800px

  .d-flex 
    display: flex
    flex-direction: row
    flex-wrap: wrap
  .cartas
    display: flex
    flex-wrap: wrap
    // column-gap: 2rem
    

</style>
