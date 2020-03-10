console.log("hello2");
const request = require("umi-request").default;
headers = {
  "x-auth-token":"gAAAAABeZfnJ0d8pGzH_FO6z0aNAt6IDXX3PO52_dsRX8xR_127p3Tu2iOsrQXInMJlxylj91JKkBJftRM8s1bPfPkRNRx7OIy-6_ri_coE71owUfKBhQ592_EJI1kf4HPPz5iOPRW7dYrvPD04dWBb-J5gWS2fvmC0i2DEbKyE6Bj822R6Z3eiP8VZd9jaWrFYGCbmVM7BP",
  "x-org": "5be5267714ac4f4abe4f064452113560",
  "x-scope": "projectScope",
  "Content-Type": "application/json"
};

//to create subnet
data={
  //  "is_dhcp_enabled": true,
    //"dns_servers": "string",
    //"allocation_pools": "string",
    "network_id": "72f6a281-0fac-446e-95d0-eba3c723212b",
    "name": "iiiiiiiiiiiii",
   // "gateway_ip": "string",
    "subnet_name": "isubnet",
    "cidr": "1.2.1.2/24",
    "ip_version":4
  }
request
  .post("http://app.ivolve.io:30627/api/v1/service/network/create_subnet", {
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
