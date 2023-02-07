<script>
  import Header from "../lib/Header.svelte";
  import Nav from "../lib/Nav.svelte";
  import Footer from "../lib/Footer.svelte";
</script>

<main>
  <Header/>
  <Nav/>
  <div class="slot">
    <slot></slot>
  </div>
  <Footer/>
</main>

<style lang="sass">
  :global(body) 
    margin: 0
    padding: 0
    font-family: 'Open Sans', sans-serif
  
  main
    display: flex
    flex-direction: column
    height: 100vh

  .slot
    flex-grow: 1
  

</style>