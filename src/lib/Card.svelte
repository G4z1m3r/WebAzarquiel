<script>
  export let sourc;
  export let alternative;
  export let titulo;
  export let texto;
</script>

<main>
  <div class="card d-flex justify-content-center align-items-center cartas">
    <img class="card-img-top rounded" src={sourc} alt={alternative}>
    <div class="card-body">
      <h5 class="card-title">{titulo}</h5>
      <p class="card-text">{texto}</p>
      <a href="#" class="btn btn-primary">Mas información</a>
    </div>
  </div>
</main>

<style lang="sass">

  @keyframes card-zoom 
    0% 
      transform: scale(1)
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)
  
    100% 
      transform: scale(1.05)
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2)

  main
    width: 100%

  .cartas
    margin: 0 5rem

  .card
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)
    column-gap: 5rem

  .card:hover
    animation: card-zoom 0.5s ease-in-out
    transform: scale(1.05)
    animation-fill-mode: forwards
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2)
    cursor: pointer

  .card-img-top
    height: 35vh
    max-width: 100%

  @media (max-width: 600px)
    .cartas
      flex-direction: column
      width: 100vw
      margin: 0
      padding: 0
    .card:hover
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2)
      cursor: pointer
  
</style>