console.log("hello2");
const request = require("umi-request").default;
headers = {
  "x-auth-token":"gAAAAABeZjm_L3yXZHVy6th9ZCkt-MBenySbOtJ1ri07GlZ7oVnnqhsES0fH9e5Zj0VSJbkjBC41_LL8_fMR_Iqi9kQspYnhgHKc5qUaDLaFN0-F2bNoxPmCw3vdOEZIFcqJx9ngHhZDtE-THRrXcgNNAyZO_E3FW-tg57arLAz0QSodYpBZi6BaAioEveiJLuhwt3atI699",
  "x-org": "5be5267714ac4f4abe4f064452113560",
  "x-scope": "projectScope",
  "Content-Type": "application/json"
};

//update subnet
data={
    "enable_gateway": false,
    "gateway_ip": "1.23.11.3",
    "allocation_pools": "1.2.1.2 - 1.2.1.253",
    "is_dhcp_enabled": false,
    "subnet": "a2aeb3a1-03ff-47ca-8b57-eb4337e7434e"
  }
request
  .post("http://app.ivolve.io:30627/api/v1/service/network/update_subnet", {
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
