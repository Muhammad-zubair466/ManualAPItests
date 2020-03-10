console.log("hello");
const request = require("umi-request").default;
headers = {
  "x-auth-token":"gAAAAABeV4SYS38XjknpFCH9G3tO8FWCa4OincmRmj2XmR9YPtyJf1S5HiFVKfaphTL-_9Y99Bs9UsArPvH449O4J0FoITAPPPh99SMD8gFwEnVgZxp93iwAYwGp_s7a50A2C9vV4Q9MdvbedpwyhDuQsujShEAz3FwEi95SPAwjUZbm6kJUvImx9FrVQse2s9dCg-qBuCOI"  ,
  "x-org": "5be5267714ac4f4abe4f064452113560",
  "x-scope": "projectScope",
  "Content-Type": "application/json"
};

//to create router 
data={"name":"r1","is_admin_state_up": true,"external_gateway_info": {
  "network_id": "be62359b-ea3a-4b60-a996-5b29e4da4b8d",
  "enable_snat": true
}} 
request
  .post("http://app.ivolve.io:30627/api/v1/service/network/create_router", {
    data:data,
    headers: headers
  })
  .then(res => {
    console.log("res = ", res);
  })
  .catch(rej => {
    console.log("error = ", rej.data);
  });
