console.log("hello2");
const request = require("umi-request").default;
headers = {
  "x-auth-token":"gAAAAABeXN4pwPP5XajCax96Nk_yU6CMlqn4xayEHbWcsO2QdlKp_IGZ222JHf9pa3cCwGuI6kTct3lZn43VkbsymDM-w_fM_zgaVsi8aZtXa15O5IL6zef4JjalXyp1NtDKLCN56KpH0_XOAV3-GPEL-7kW9tN3zt9rTpDNbUMfszlIVshOxUe00MwCtIaHEut8L5bpmdZ6",
  "x-org": "5be5267714ac4f4abe4f064452113560",
  "x-scope": "projectScope",
  "Content-Type": "application/json"
};

//Add Interface To Router 
data={
    "router": "1dc52bcd-ce45-455a-a69e-4f1705cb088a",
    "subnet_id": "79f6d672-ca11-495b-b143-a82857d0f8c1"
  }
  

request
  .post("http://app.ivolve.io:30627/api/v1/service/network/add_interface_to_router", {
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
