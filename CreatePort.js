console.log("hello2");
const request = require("umi-request").default;
headers = {
  "x-auth-token":"gAAAAABeV6B5GNZdiG8MgQTk0xDO5ejmf5WHg51NjuK5Vekl4fyGThTqAcz_sgkAMJPmTpSXbxumejoR8YcJgIdPTOpDXTopplnf-_G4QIZM-A62wh6pZNh7TE9j3HftnulOtOH5qH5qDqENKZJNo7lGd3SIgfAFz3UY-6iIwJOgpwvJ6Z64jVrGOwlqa9e_q_YaqsNtulwR",
  "x-org": "5be5267714ac4f4abe4f064452113560",
  "x-scope": "projectScope",
  "Content-Type": "application/json"
};

//to create  port
data={
    "network_id": "ac858742-cc47-46ba-a1cf-5605b9399906",
    "name": "porrt",
    //"specify_ip": "string",
    //"binding__vnic_type": "string",
    //"subnet_id": "string",
   // "fixed_ip": "string"
  }

request
  .post("http://app.ivolve.io:30627/api/v1/service/network/create_port", {
    data:data,
    headers: headers
  })
  .then(res => {
    console.log("res = ", res);
  })
  .catch(rej => {
    console.log("error = ", rej.data);
  });
