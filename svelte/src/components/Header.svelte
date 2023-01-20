<script>
</script>

<main>
    <div class="headerbox">
        <h1 class="heading">SSL <span class="linear-grad-blue">Shopper</span></h1>
        <!--<div class="container"> 
        <a href="www.xyz.com" class="link"><span class="menu-item ">SSL Wizard</span></a>
        <a href="www.xyz.com" class="link"><span class="menu-item ">Cheap SSL Certificates</span></a>
        <a href="www.xyz.com" class="link"><span class="menu-item ">Code Signing Certificates</span></a>
        <a href="www.xyz.com" class="link"><span class="menu-item ">Wild Card Certificates</span></a>
        </div>
        <button class="btn-primary">SSL Tools</button>-->
    </div>
</main>

<style>
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .headerbox {
        position: fixed;
        z-index: 10000;
        width: 100%;
        background: #FFFFFF;
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
      background-image: linear-gradient(to right, #0066ff, #0066ff, #0035f5, #0003ff);
      -webkit-background-clip: text;
      background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }

    .link{
        font-family: sans-serif;
        font-style: normal;
        font-size: 0.9rem;
        margin: 0 2rem;
        text-decoration: none;
        color: #1a1a1a;
        transition: transform 0.1s ease-out;
    }

    .link:hover{
        color: #0066ff;
        transform: scale(1.1);
    }


/* Links Animation */
.menu-item{
  display: inline-block;
  position: relative;

}

.menu-item::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.26s ease-out;
  opacity: 1;
  transform: scale(0);
  transform-origin: center;
}

.menu-item:hover::after {
  transform: scaleX(1);
  color: #0066ff;
}


    .btn-primary {
      display: flex;
      float: right;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 14px;
      color: #fff;
      background: #0066ff;
      transition: 0.2s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
      border: 1px solid #0066ff;
      border-radius: 8px;
    }
    .btn-primary:hover{
      border: 1px solid #0066ff;
      color: #0066ff;
      background: transparent;
      cursor: pointer;
    }
    @media only screen and (min-width: 375px) and (max-width: 812px) {
      .headerbox,.container{    
        width:100%;
      }
    }
    @media only screen and (max-width:500px){
      .heading{
        font-size: 1.2rem;
      }
      .link{
        font-size: 0.6rem;
      }
    }
</style>