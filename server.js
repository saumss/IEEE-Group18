import express from "express";
import sslChecker from "ssl-verifier";
import cors from "cors";

const app = express();
app.use(cors({ origin: true }));
const port = 3000;

app.get("/", (req, res) => {
  res.send("we will get back to you shortly");
});

app.post("/", (req, res) => {
  const query = req.query.hostname;
  sslChecker
    .Info(`https://${query}`, { port: 443, method: "GET" })
    .then((data) => {
      console.log(data.issuerDetails);
      res.send({
        companyName: data.subject.commonName,
        SANs: data.subjectAlternativeName,
        issuerDetails: {
          issuer: data.issuer.commonName,
          organization: data.issuer.organization,
          location: data.issuer.location,
        },
        serverType: "gws",
        daysRemaining: data.daysRemaining,
        validFrom: data.validFrom,
        validTo: data.validTo,
        valid: data.valid,
        serialNumber: data.serialNumber,
      });
    })
    .catch((error) => {
      res.send({
        companyName: "NULL",
        SANs: "NULL",
        issuerDetails: {
          issuer: "NULL",
          organization: "NULL",
          location: "NULL",
        },
        serverType: "gws",
        daysRemaining: "NULL",
        validFrom: "NULL",
        validTo: "NULL",
        valid: "NULL",
        serialNumber: "NULL",
      });
    });
});

app.listen(port, () => {
  console.log("server started at port : " + port);
});
