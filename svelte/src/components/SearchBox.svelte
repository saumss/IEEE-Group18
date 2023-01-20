<script>
  // @ts-nocheck
  import Results from "./Results.svelte";

  let hostname = "";
  let companyName;
  let SANs;
  let issuerDetails;
  let valid = "";
  let daysRemaining;
  let serialNumber;
  let validFrom;
  let validTo;

  let success = false;
  let response;
  async function submitForm() {
    response = await fetch(`http://localhost:3000/?hostname=${hostname}`, {
      method: "POST",
    }).catch((error) => console.log(error));
    const data = await response.json();
    const resData = await data;
    // console.log(resData);
    companyName = data.companyName;
    SANs = data.SANs;
    issuerDetails = data.issuerDetails;
    daysRemaining = data.daysRemaining;
    validFrom = new Date(data.validFrom).toDateString().slice(4);
    validTo = new Date(data.validTo).toDateString().slice(4);
    valid = data.valid;
    success = valid;
  }
</script>

<main id="main-page">
  <div class="container">
    <div class="search-box">
      <h1 class="heading">SSL <span class="linear-grad-blue">Checker</span></h1>
      <p class="info-para">
        Use our fast SSL Checker to help you quickly diagnose problems with your
        SSL certificate installation. You can verify the SSL certificate on your
        web server to make sure it is correctly installed, valid, trusted and
        doesn't give any errors to any of your users.
      </p>
      <p class="info-para">
        To use the SSL Checker, simply enter your server's public hostname
        (internal hostnames aren't supported) in the box below and click the
        Check SSL button. If you need an SSL certificate, check out the SSL
        Wizard.
      </p>
      <a href="#main-page" class="more-info-link"
        >More information about the SSL Checker</a
      >

      <div class="input-box">
        <div class="server-name-div">Server Hostname</div>
        <form on:submit|preventDefault={submitForm}>
          <div class="flex input-container">
            <div class="input-div inline-block">
              <span class="input-span">http://</span><input
                type="text"
                class="input-url"
                name="input-url"
                bind:value={hostname}
                placeholder="www.example.com"
              />
            </div>
            <div class="inline-block">
              <button class="btn-primary" type="submit">Check SSL</button>
            </div>
          </div>
        </form>
        <div class="span-container">
          <span class="input-hint-span">Enter URL of website</span>
        </div>
      </div>
    </div>
  </div>

  {#await response}
    <div><h1>...waiting</h1></div>
  {:then Number}
    {#if valid}
      <Results
        {companyName}
        {issuerDetails}
        {daysRemaining}
        {serialNumber}
        {valid}
        {validFrom}
        {validTo}
      />
    {/if}
  {:catch error}
    <p style="color: red">
      {error.message}
    </p>
  {/await}
</main>

<style>
  :root {
    --primary-btn-color: #0066ff;
    --primary-txt-color: #000000;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Montserrat", sans-serif;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }

  /* utility classes */
  .btn-primary {
    display: flex;
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
  .btn-primary:hover {
    border: 1px solid #0066ff;
    color: #0066ff;
    background: transparent;
    cursor: pointer;
  }
  .inline-block {
    display: inline-block;
  }

  .flex {
    display: flex;
  }

  .heading {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    margin-bottom: 0.25rem;
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

  /* Search box */
  .search-box {
    padding: 1rem 1rem;
    background: #ffffff;
    border: 1px solid #0066ff;
    width: 75%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.63);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.6px);
    -webkit-backdrop-filter: blur(6.6px);
    margin: 9rem 0 2rem 0;
  }

  .info-para,
  .more-info-link {
    font-size: 0.8rem;
    line-height: 1.4;
    font-weight: 500;
    color: #666666;
  }

  .more-info-link {
    cursor: pointer;
    color: #0066ff;
    text-decoration: none;
    margin-top: 0.25rem;
  }

  /* input box */
  .input-box {
    margin-top: 2rem;
    border: 1px solid #0066ff;
    border-radius: 8px;
    padding-bottom: 2rem;
    margin-bottom: 1.5rem;
  }

  .input-container {
    padding: 0 1rem;
    margin-bottom: 0.25rem;
  }

  .input-div {
    border: 1px solid #d0d5dd;
    border-radius: 0.5rem;
    flex: 2;
    margin-right: 0.7rem;
    display: flex;
  }

  .input-span {
    padding: 8px 14px;
    border-right: 1px solid #d0d5dd;
    color: #827590;
    font-size: 14px;
  }

  .input-url {
    border: none;
    outline: none;
    font-size: 14px;
    padding: 8px 14px;
    flex: 1;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  .server-name-div {
    width: 100%;
    padding: 10px 14px;
    background: #0066ff;
    font-weight: 500;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    color: #ffffff;
    border: 10px;
    margin-bottom: 1rem;
  }

  .input-hint-span {
    color: #827590;
    font-size: 10px;
    margin-left: 1.3rem;
  }

  @media only screen and (max-width: 812px) {
    .container {
      width: 100%;
      padding: 60px 1rem 1rem;
      padding-top: 60px;
      padding-bottom: 1rem;
    }

    .search-box {
      width: 100%;
      margin: 4rem 0 2rem 0;
    }
  }

  @media only screen and (max-width: 560px) {
    .input-container {
      padding: 0 1rem;
      flex-direction: column;
      margin-bottom: 0.25rem;
    }

    .btn-primary {
      margin: 1rem auto;
    }

    .span-container {
      display: flex;
      justify-content: center;
    }

    .input-hint-span {
      margin: 0;
    }
  }

  @media only screen and (max-width: 361px) {
    .container {
      padding: 40px 0 0 0;
    }

    .search-box {
      box-sizing: border-box;
      width: 95%;
      border: none;
      padding: 1rem;
    }

    .info-para {
      padding: 1rem;
    }

    .more-info-link {
      padding: 0;
    }
    .input-url {
      width: 50%;
    }
  }
</style>
