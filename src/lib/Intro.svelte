<script>
  import Subtitle from "./Subtitle.svelte";
  import Title from "./Title.svelte";
  export let titulo;
  export let bgi;
</script>

<main>
  <div class="container-Intro">
    <Title 
      titulo="{titulo}"
    />
    <Subtitle 
      contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum ante vel dignissim hendrerit. Aliquam a quam ut dolor dapibus aliquam in in orci. Phasellus blandit risus accumsan"
    />
  </div>
</main>

<style>

</style>