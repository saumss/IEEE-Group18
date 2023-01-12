import express from 'express';
import sslChecker from 'ssl-verifier';
import cors from 'cors';

const app = express();
app.use(cors({origin:true}))
const port = 3000;

    

app.get('/', (req, res)=>{
   const query = req.query.hostname;
    sslChecker.Info(`https://${query}`, {port: 443, method: "GET"}).then(data => {
    const vd = (data.valid) ? true : false;
        if(query){
            res.send({
                "companyName": data.subject.commonName,
                "SANs": data.subjectAlternativeName,
                "issuerDetails": { 
                                    "issuer": data.issuer.commonName, 
                                    "organization": data.issuer.organization, 
                                    "location": data.issuer.location
                                },
                "serverType": 'gws',        
                "daysRemaining": data.daysRemaining,
                "validFrom": data.validFrom,
                "validTo": data.validTo,
                "valid":   vd,
                "serialNumber": data.serialNumber
            })
            
        }
        else{
            res.send('hostname not provided')
        }
        
    
    }).catch(error => {

    res.send(`invalid hostname or hostname not provided <br> here is what happened wrong : ${error}`);
    
    });
})

app.post('/', (req, res)=>{
    const query = req.query.hostname;
    sslChecker.Info(`https://${query}`, {port: 443, method: "GET"}).then(data => {
        console.log(data.issuerDetails);
    res.send({
        "companyName": data.subject.commonName,
        "SANs": data.subjectAlternativeName,
        "issuerDetails": { 
                            "issuer": data.issuer.commonName, 
                            "organization": data.issuer.organization, 
                            "location": data.issuer.location
                        },
        "serverType": 'gws',        
        "daysRemaining": data.daysRemaining,
        "validFrom": data.validFrom,
        "validTo": data.validTo,
        "valid": data.valid,
        "serialNumber": data.serialNumber
    });
    
    }).catch(error => {

        res.send(`invalid hostname or hostname not provided or something went wrong : ${error}`);
    
    });
})

app.listen(port, ()=>{
    console.log('server started at port : ' + port);
})