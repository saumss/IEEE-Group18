
<script>
    export let companyName = "linkedIn.com";
    export let issuerDetails = {
        'issuer' : "DigiCert",
        'location': "london"
    };
   
    export let daysRemaining = '30';
    export let validFrom = "";
    export let validTo = "";
    export let valid = '';
    export let serialNumber = '39399w09w0s030920';
    // success = valid;
</script>

<main>

    {#if valid!="NULL"}
        <div class="report">
        <div class="rpt-summary">

            <div class="rpt-sum-header">
                <h5 class="rpt-sum-text">Report Summary</h5>
            </div>
            <div class="rpt-info">
                <p>
                    These results were cached from December 15, 2022, 12:40 am PST to conserve server resources.
                    If you are diagnosing a certificate installation problem, you can get uncached results by clicking here.
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
                <!-- <div class="rpt-sum-cont" id="rsc-2">
                    <div class="rsc-q">
                        <p class="rsc-q-txt">IP Address</p>
                    </div>
                    <div class="rsc-a">
                        <p>13.107.42.14</p>
                    </div>
                </div> -->
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
                        <p class="rsc-q-txt">Host name is correctly listed in the certificate</p>
                    </div>
                    <div class="rsc-a">
                        {#if valid != 'NULL'}
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
                <img class="ri-im" src="https://www.sslshopper.com/assets/templates/sslshopper/images/sslchecker/certificate_good_server.png" alt="server">
                <div class="ri">
                    <p>Company name: {companyName}</p> 
                    <p>Location: {issuerDetails.location}</p>
                    <p>Valid: from {validFrom} to {validTo}</p> 
                    <p>Serial Number: {serialNumber} </p>
                    <p>Issuer: {issuerDetails.issuer} </p>
                </div>
            </div>

            <!-- <div class="rslt-itm"><img class="ri-arr" src="https://www.sslshopper.com/assets/templates/sslshopper/images/sslchecker/arrow_down.png" alt="arrow"></div>

            <div class="rslt-itm">
                <img class="ri-im" src="https://www.sslshopper.com/assets/templates/sslshopper/images/sslchecker/certificate_good_chain.png" alt="chain">
                <p class="ri">
                    Common name: DigiCert SHA2 High Assurance Server CA <br>
                    Organization: DigiCert Inc Org. Unit: www.digicert.com <br>
                    Location: US <br>
                    Valid from October 22, 2013 to October 22, 2028 <br>
                    Serial Number: 04e1e7a4dc5cf2f36dc02b42b85d159f <br>
                    Signature Algorithm: sha256WithRSAEncryption <br>
                    Issuer: DigiCert High Assurance EV Root CA <br>
                </p>
            </div> -->
        </div>
    </div>
    {:else}
    <h3 class="error-message">Invalid or empty hostname</h3>
    {/if}

</main>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

    main {
        padding: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #ffffff url("251846398462.png") repeat right top;
    }

    .report {
        font-family: "montserrat", sans-serif;
        width: 800px;
        margin: 40px 0px;
    }

    .rpt-summary {
        border: 2px solid #0066ff;
        border-radius: 8px;
        margin: 0;
        /* background-color: #ffffff; */
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
        font-weight: lighter;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        padding: 0.5rem 1.5rem;
        font-size: 1.4rem;
    }

    .rpt-info{
        padding: 1rem;
        border-bottom: 1px solid #D6CECE;
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

    

    #rsc-1, #rsc-3 {
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
        background-color: #12B76A;
    }

    #rscb2 {
        /* color: #000000;
        background-color: #ffffff;
        border: 1px solid #0066ff; */
        color: #ffffff;
        background-color: #F04438;
        border: 1px solid #F04438;
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
        width: 100%;
    }

    .ri-im {
        transform: scale(0.4);
        margin: 1.25rem;
        flex: 1;
    
    }

    /* .ri-arr {
        transform: scale(0.8);
        text-align: center;
    } */



    .ri {
        font-size: 14px;
        flex: 1;
    }
    
    .ri p{
        margin: 5px 0;
    }
    .error-message{
        color: #F04438;
    }
    @media only screen and (min-width: 320px) and (max-width: 812px) {
      .rpt-summary{    
        margin: auto;
        width: 60%;
      }
      .result-items{
        margin: auto;
        width: 60%;
      }
    }
    @media only screen and (max-width: 500px){
        .ri{
            font-size: 8.4px;
        }
    }


</style>
