<script>
  export let companyName = "linkedIn.com";
  export let issuerDetails = {
    issuer: "DigiCert",
    location: "london",
  };
  export let serverType = "gws";
  export let daysRemaining = "30";
  export let validFrom = "";
  export let validTo = "";
  export let valid = "";
  export let serialNumber = "39399w09w0s030920";
</script>

<main>
  {#if valid != "NULL"}
    <div class="report">
      <div class="rpt-summary">
        <div class="rpt-sum-header">
          <div class="rpt-sum-text">Report Summary</div>
        </div>
        <div class="rpt-info">
          <p>
            Here are the results. The results are generated using ssl-verifier
            module from <a
              class="ssl-veri-link"
              href="https://www.npmjs.com/package/ssl-verifier">ssl-verifier</a
            >
          </p>
        </div>
        <div class="rpt-sum-contents">
          <div class="rpt-sum-cont" id="rsc-1">
            <div class="rsc-q">
              <p class="rsc-q-txt">Website Address</p>
            </div>
            <div class="rsc-a">
              <p>{companyName}</p>
            </div>
          </div>
          <div class="rpt-sum-cont" id="rsc-2">
            <div class="rsc-q">
              <p class="rsc-q-txt">Certificate issued by</p>
            </div>
            <div class="rsc-a">
              <p>{issuerDetails.issuer}</p>
            </div>
          </div>
          <div class="rpt-sum-cont" id="rsc-3">
            <div class="rsc-q">
              <p class="rsc-q-txt">Certificate expires in</p>
            </div>
            <div class="rsc-a">
              <p>{daysRemaining} Days</p>
            </div>
          </div>
          <div class="rpt-sum-cont" id="rsc-4">
            <div class="rsc-q">
              <p class="rsc-q-txt">
                Host name is correctly listed in the certificate
              </p>
            </div>
            <div class="rsc-a">
              {#if valid != "NULL"}
                <button class="rsc-button" id="rscb1">Yes</button>
              {:else}
                <button class="rsc-button" id="rscb2">No</button>
              {/if}
            </div>
          </div>
        </div>
      </div>

      <div class="result-items">
        <div class="rslt-itm">
          <img
            class="ri-im"
            src="https://www.sslshopper.com/assets/templates/sslshopper/images/sslchecker/certificate_good_server.png"
            alt="server"
          />
          <div class="ri">
            <p>Common name: {companyName}</p>
            <p>Location: {issuerDetails.location}</p>
            <p>Valid: from {validFrom} to {validTo}</p>
            <p>Serial Number: {serialNumber}</p>
            <p>Issuer: {issuerDetails.issuer}</p>
            <p>server Type: {serverType}</p>
          </div>
        </div>
      </div>
    </div>
  {:else}
    <p class="error-message">
      <img class="error-img" src="../Assets/warning%20icon.webp" alt="" />
      <span>Invalid or empty hostname</span>
    </p>
  {/if}
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

  main {
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff url("251846398462.png") repeat right top;
  }

  .ssl-veri-link {
    text-decoration: none;
    color: #0066ff;
    font-weight: 500;
  }

  .report {
    font-family: "montserrat", sans-serif;
    width: 80%;
    margin: 1rem 0;
  }

  .rpt-summary {
    border: 2px solid #0066ff;
    border-radius: 8px;
    width: 75%;
    margin: auto;
    background: rgba(255, 255, 255, 0.63);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.6px);
    -webkit-backdrop-filter: blur(6.6px);
  }

  .rpt-sum-header {
    background-color: #0066ff;
    color: #ffffff;
    display: flex;
    align-items: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
  }

  .rpt-info {
    padding: 1rem;
    border-bottom: 1px solid #d6cece;
    font-size: 14px;
  }

  .rpt-sum-contents {
    font-size: 14px;
    padding: 1rem;
  }

  .rpt-sum-cont {
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .rsc-q-txt {
    font-size: 14px;
    margin-left: 0.3rem;
  }

  .rsc-q {
    width: 50%;
  }

  .rsc-a {
    width: 50%;
  }

  #rsc-1,
  #rsc-3 {
    background-color: #e6e6e6;
  }

  .rsc-button {
    padding: 8px 16px;
    margin: 4px;

    border: 0px;
    border-radius: 8px;
  }

  #rscb1 {
    color: #ffffff;
    background-color: #12b76a;
  }

  #rscb2 {
    color: #ffffff;
    background-color: #f04438;
    border: 1px solid #f04438;
  }

  .result-items {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rslt-itm {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    margin-top: 2rem;
  }

  .ri-im {
    transform: scale(0.4);
    margin: 1.25rem;
    flex: 1;
  }

  .ri {
    font-size: 1.1rem;
    flex: 1;
  }

  .ri p {
    margin: 1rem 0;
  }

  .error-message {
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #f04438;
    margin-bottom: 1.5rem;
  }

  .error-img {
    widows: 1rem;
    height: 1rem;
    margin: 0 5px;
  }

  @media only screen and (max-width: 812px) {
    .report {
      width: 100%;
      padding: 1rem;
    }

    .rslt-itm {
      width: 100%;
    }

    .rpt-summary {
      margin: auto;
      width: 100%;
    }

    .result-items {
      margin: auto;
      width: 60%;
    }

    .ri {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 560px) {
    .ri {
      flex: 2;
    }

    .rslt-itm {
      margin: 1rem 0;
      flex-direction: column;
    }
  }
</style>
