console.log("hello2");
const request = require("umi-request").default;
headers = {
  "x-auth-token":"gAAAAABeXgBe7NMR-h2nDyegD_f742Q58VOqOo_x0XVKnVi-HnXcd7KgdcPrjbXBS-3EYlK-bVgelLG1kkhevIVbozt9_Zju0FvbYn5XgOL_LRalGfrC-faf2s-MPrVKwIZws407MSSyIWIVZTtf4BpLIMMRBGNhJe1FRGcgY94r0an3rKiGJvcJegPDyUzItcixA_KaWUjC",
   "x-org": "5be5267714ac4f4abe4f064452113560",
  "x-scope": "projectScope",
  "Content-Type": "application/json"
};

//to delete  port
data={
    "port_id": "b7c902a0-aae9-4f21-8321-44e7d7272690"
  }
request
  .post("http://app.ivolve.io:30627/api/v1/service/network/delete_port", {
    data:data,
    headers: headers
  })
  .then(res => {
    console.log("res = ", res);
  })
  .catch(rej => {
    console.log("error = ", rej.data);
  });
