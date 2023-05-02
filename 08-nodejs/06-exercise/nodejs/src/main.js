import express from "express";
import cors from "cors";

const webServer = express();
webServer.use(cors());
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

const company = [];

webServer.get("/", (request, response) => {
  console.log("test")
  response.json(company)
  response.send("Hello World");
});
webServer.get("/company", (request, response) => {
  console.log("test")
  response.json(company)
});
webServer.post("/company", (request, response) => {
  const name = request.body.name
  const age = request.body.age
  const companyId = `companyId-${company.length + 1}`
  const taxId = `companyId-${company.length + 1}`
  company.push({companyId,name,age,taxId})
  response.send(company);
});

// code down below.
webServer.listen(port,ipAddress,()=>{
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
})