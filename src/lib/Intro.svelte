<script>
  import Subtitle from "./Subtitle.svelte";
  import Title from "./Title.svelte";
  export let titulo;
  export let bgi;
</script>

<main>
  <div class="container-Intro d-flex justify-content-center pt-5" >
    <Title 
      titulo="{titulo}"
    />
    <!-- <Subtitle 
      contenido=""
    /> -->
    
  </div>
</main>

<style>

</style>