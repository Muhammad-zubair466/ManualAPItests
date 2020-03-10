console.log("hello2");
const request = require("umi-request").default;
headers = {
  "x-auth-token":"gAAAAABeXJixCYxPv1JASDm0-ZQMKxqYW0htbKTjZuu_9EUB8c1yEG8PX2VPbjtdiF0TAb-OMibOdCdayAld_06mx8me5MEMy4Koi1gap8jaeHzZFmqKgpEtnWTb_RLRESdDjzQtvrSSzjtpdQSnNk2QKft1rADUyHl3YtlIQVszcrcw7aMinRYI3rwv-cmbsgFP28F1rh3h",
  "x-org": "5be5267714ac4f4abe4f064452113560",
  "x-scope": "projectScope",
  "Content-Type": "application/json"
};

//Remove Interface From Router 
data={
    "router": "1dc52bcd-ce45-455a-a69e-4f1705cb088a",
    "subnet_id": "79f6d672-ca11-495b-b143-a82857d0f8c1"
  }
  

request
  .post("http://app.ivolve.io:30627/api/v1/service/network/remove_interface_from_router", {
    data:data,
    headers: headers
  })
  .then(res => {
    console.log("res = ", res);
  })
  .catch(rej => {
    console.log("error = ", rej.data);
  });
