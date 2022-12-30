
<script>

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

            <div class="rpt-sum-contents">

                <div class="rpt-info">
                    <p>
                        These results were cached from December 15, 2022, 12:40 am PST to conserve server resources.
                        If you are diagnosing a certificate installation problem, you can get uncached results by clicking here.
                    </p>
                </div>

                <hr class="line">

                <div class="rpt-sum-cont" id="rsc-1">
                    <div class="rsc-q">
                        <p class="rsc-q-txt">Website Address</p>
                    </div>
                    <div class="rsc-a">
                        <p>www.linkedin.com</p>
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
                        <p>DigiCert</p>
                    </div>
                </div>
                <div class="rpt-sum-cont" id="rsc-4">
                    <div class="rsc-q">
                        <p class="rsc-q-txt">Certificate expires in</p>
                    </div>
                    <div class="rsc-a">
                        <p>45 Days</p>
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
                <img class="ri-im" src="src\routes\certificate_good_server.png" alt="server">
                <p class="ri">
                    Common name: *.facebook.com <br>
                    SANs: *.facebook.com, *.facebook.net, *.fbcdn.net, *.fbsbx.com, *.m.facebook.com, *.messenger.com, *.xx.fbcdn.net, *.xy.fbcdn.net, *.xz.fbcdn.net, facebook.com, messenger.com <br>
                    Organization: Facebook, Inc. <br>
                    Location: Menlo Park, California, US <br>
                    Valid from September 16, 2022 to December 16, 2022 <br>
                    Serial Number: 0139f722797ee11cf3f7aa8a63ff713a <br>
                    Signature Algorithm: sha256WithRSAEncryption <br>
                    Issuer: DigiCert SHA2 High Assurance Server CA <br>
                </p>
            </div>

            <img class="ri-arr" src="src\routes\arrow_down.png" alt="arrow">

            <div class="rslt-itm">
                <img class="ri-im" src="src\routes\certificate_good_chain.png" alt="chain">
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

        background-color: #ffffff;
    }

    .rpt-sum-header {
        background-color: #0066ff;
        color: #ffffff;

        display: flex;
        align-items: center;

        padding-left: 28px;

        font-size: 24px;
        

        height: 44px;
    }

    .rpt-sum-contents {
        padding: 8px 24px;

        font-size: 14px;
    }

    .rpt-sum-cont {
        padding: 2px;

        border-radius: 8px;

        display: flex;
        flex-direction: row;
        align-items: center;
        
    }

    .line {
        border: 1px solid #000000;
        
    }

    .rsc-q-txt {
        font-size: 14px;
        margin-left: 8px;
    }

    .rsc-q {
        width: 50%;
    }

    .rsc-a {
        width: 50%;
    }

    

    #rsc-2, #rsc-4 {
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
        background-color: #0066ff;
    }

    #rscb2 {
        color: #000000;
        background-color: #ffffff;
        border: 1px solid #0066ff;
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
        

        width: 600px;
    }

    .ri-im {
        width: 128px;
        height: 128px;

        margin: 20px;
    }

    .ri-arr {
        width: 48px;
        height: 48px;

        margin: 20px;
    }

    .ri {
        font-size: 16px;
    }

    

    

    

</style>
