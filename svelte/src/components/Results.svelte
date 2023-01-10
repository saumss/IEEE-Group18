
<script>
    export let name='www.xyz.com'
    export let issuer='sujal bhaiya'
    export let expire='22'
</script>

<main>

    <div class="nav-bar">
        <div class="nav-bar-left">
            SSL Shoper
        </div>

        <div class="nav-bar-right">
            <div class="nav-bar-rt-links">
                <a class="links" id="ssl-wzrd" href="home">SSL Wizard</a>
            </div>
            <div class="nav-bar-rt-links">
                <a class="links" href="home">Cheap SSL Certificates</a>
            </div>
            <div class="nav-bar-rt-links">
                <a class="links" href="home">Wild Card Certificates</a>
            </div>
            <div class="nav-bar-rt-links">
                <a class="links" id="ssl-tls" href="home">SSL Tools</a>
            </div>
        </div>
    </div>

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
                        <p class="rsc-q-txt">website name</p>
                    </div>
                    <div class="rsc-a">
                        <p>{name}</p>
                    </div>
                </div>
                <div class="rpt-sum-cont" id="rsc-2">
                    <div class="rsc-q">
                        <p class="rsc-q-txt">IP Address</p>
                    </div>
                    <div class="rsc-a">
                        <p>13.107.42.14</p>
                    </div>
                </div>
                <div class="rpt-sum-cont" id="rsc-3">
                    <div class="rsc-q">
                        <p class="rsc-q-txt">Certificate issued by</p>
                    </div>
                    <div class="rsc-a">
                        <p>{issuer}</p>
                    </div>
                </div>
                <div class="rpt-sum-cont" id="rsc-4">
                    <div class="rsc-q">
                        <p class="rsc-q-txt">Certificate expires in</p>
                    </div>
                    <div class="rsc-a">
                        <p>{expire}</p>
                    </div>
                </div>
                <div class="rpt-sum-cont" id="rsc-5">
                    <div class="rsc-q">
                        <p class="rsc-q-txt">Host name is correctly listed in the certificate</p>
                    </div>
                    <div class="rsc-a">
                        <button class="rsc-button" id="rscb1">Yes</button>
                        <button class="rsc-button" id="rscb2">No</button>
                    </div>
                </div>

            </div>
        </div>

        <div class="result-items">
            <div class="rslt-itm">
                <img class="ri-im" src="https://www.sslshopper.com/assets/templates/sslshopper/images/sslchecker/certificate_good_server.png" alt="server">
                <p class="ri">
                    Common name: *.facebook.com <br>
                    SANs: *.facebook.com, *.facebook.net, <br> *.fbcdn.net, *.fbsbx.com, *.m.facebook.com, <br> *.messenger.com, *.xx.fbcdn.net, *.xy.fbcdn.net, <br> *.xz.fbcdn.net, facebook.com, messenger.com <br>
                    Organization: Facebook, Inc. <br>
                    Location: Menlo Park, California, US <br>
                    Valid from September 16, 2022 to December 16, 2022 <br>
                    Serial Number: 0139f722797ee11cf3f7aa8a63ff713a <br>
                    Signature Algorithm: sha256WithRSAEncryption <br>
                    Issuer: DigiCert SHA2 High Assurance Server CA <br>
                </p>
            </div>

            <div class="rslt-itm"><img class="ri-arr" src="https://www.sslshopper.com/assets/templates/sslshopper/images/sslchecker/arrow_down.png" alt="arrow"></div>

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
            </div>
        </div>
    </div>

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

    .nav-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 80px;

        padding: 0px 80px;

        font-family: "montserrat", sans-serif;

        box-shadow: 0px 2px 2px #0066ff;
        background-color: #ffffff;

    }

    .nav-bar-left {
        margin-left: 80px;

        font-size: 32px;
    }

    .nav-bar-right {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-right: 80px;

    }

    .nav-bar-rt-links {
        margin: 0px 0px 0px 24px;
    }

    .links {
        text-decoration: none;

        color: #000000;
        font-size: 16px;
    }

    #ssl-wzrd {
        color: #0066ff;
    }

    #ssl-tls {
        color: #0066ff;

        border: 2px solid #0066ff;
        border-radius: 8px;
        padding: 6px;
    }

    .report {
        font-family: "montserrat", sans-serif;

        width: 800px;

        margin: 40px 0px;

        
    }

    .rpt-summary {
        border: 2px solid #0066ff;
        border-radius: 8px;
        margin: 40px 0px;
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
        margin: 80px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .rslt-itm {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        flex: 1;
    }

    .ri-im {
        transform: scale(0.4);
        margin: 1.25rem;
        flex: 1;
    
    }

    .ri-arr {
        transform: scale(0.8);
        /* margin: 2rem 0 2rem 6rem; */
        text-align: center;
    }

    .ri {
        font-size: 14px;
        flex: 1;
    }

    

    

    

</style>
