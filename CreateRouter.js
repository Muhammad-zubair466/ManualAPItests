console.log("hello2");
const request = require("umi-request").default;
headers = {
  "x-auth-token":"gAAAAABeWNf9C1AUJtkg5jIkWYDRCOUsYLr2TZu8d9e0_PwXMBF4fC_wSiajNqCK_Q2kqsI78QT18ntnqnGR6jsV1okL7hrCk48QWWQfAIL19kyjcxAk8mKTuprBHfxl9nssuAJLrjZ_sVV-Qv1srqFRNVm6KO8mtP1SwE0jvkt3swfVMSIs1-g3cEjAGF4mUMju2i1bCZOo",
  "x-org": "5be5267714ac4f4abe4f064452113560",
  "x-scope": "projectScope",
  "Content-Type": "application/json"
};

//to create  ROUTER
data={
    "name":"ROUTER5",
    "is_admin_state_up": true,
    "external_gateway_info": {
      "network_id":"be62359b-ea3a-4b60-a996-5b29e4da4b8d",
      "enable_snat": true
    }
  }
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
