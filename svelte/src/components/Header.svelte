<script>
</script>

<main>
  <div class="headerbox">
    <h1 class="heading">SSL <span class="linear-grad-blue">Shoper</span></h1>
  </div>
</main>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Montserrat", sans-serif;
  }

  .headerbox {
    position: fixed;
    z-index: 10000;
    width: 100%;
    background: #ffffff;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.65);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
  }

  .heading {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 1.8rem;
    text-align: center;
  }

  .linear-grad-blue {
    background-image: linear-gradient(
      to right,
      #0066ff,
      #0066ff,
      #0035f5,
      #0003ff
    );
    -webkit-background-clip: text;
    background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

  /* Responsiveness */

  @media only screen and (min-width: 375px) and (max-width: 812px) {
    .headerbox {
      width: 100%;
    }
  }
  @media only screen and (max-width: 500px) {
    .heading {
      font-size: 1.2rem;
    }
  }
</style>
