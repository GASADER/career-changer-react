import express from "express";
const webServer = express();
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

// code here.
const company = [
  {
    companyID: "mock-id-1",
    name: 'as',
    texId: 1,
    employees: "mock-employeesid-1"
  },
];

webServer.get("/",(req,res)=>{
  res.send("Hello World")
})
webServer.get("/company",(req,res)=>{
  res.json(company)
})
webServer.post("/company",(req,res)=>{
  const companyID = `mock-id-${company.length + 1}`;
  const name = req.body.name;
  const texId = req.body.texId;
  const employees = `mock-employeesid-${company.length + 1}`;
  company.push({companyID, name, texId, employees})
  res.send("Create Company Success")
})

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
