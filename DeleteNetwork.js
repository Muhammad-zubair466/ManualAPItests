console.log("hello2");
const request = require("umi-request").default;
headers = {
  "x-auth-token":"gAAAAABeZetEMJURtjtWK-VbTvb39tQPM8kVXhknp3i5PV2VEDe-_OAP1Fz2HpvD2p3MAoNrolhqqdjstZNgresQMJHrmG6PSbbElGHx4CUp3_DtnW-HuYKyh2PCrreaRbz85BJJe4Ois0apWKmSXss35A7Tk1KFxphMo2b-c58HxPUc00H7fDuIU4DL37RJulyRdWK6JJEB",
  "x-org": "5be5267714ac4f4abe4f064452113560",
  "x-scope": "projectScope",
  "Content-Type": "application/json"
};

//to create  network
data=
{
    "id": [
      "6fed132a-9506-4b20-8f6e-2ad23ac62016"
    ]
  }
    
request
  .post("http://app.ivolve.io:30627/api/v1/service/network/delete_network", {
    data:data,
    headers: headers
  })
  .then(res => {
    console.log("res = ", res);
  })
  .catch(rej => {
    console.log("error = ", rej.data);
    console.log("status Code: ", rej.response.status)
  });
