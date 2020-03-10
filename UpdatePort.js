console.log("hello2");
const request = require("umi-request").default;
headers = {
  "x-auth-token":"gAAAAABeWK1wVgpDIqSMkm3UPEdVcAGCT-FvdAWQm3EKu1HSpaprhTcVcKYTioaxIV7Jpy6yLSgzuqH-ZjMJGkJeWXDXO8mLf8TT1byBlB_HCg5eomklc8jTClt-Sb8NrMINlv6W5Y6DTORfV2xMlL8AGgUNAH71cbNJOYh3OxjUHktDbbtnIxDJx0nysd1T3LkEl8Ye-ACE",
  "x-org": "5be5267714ac4f4abe4f064452113560",
  "x-scope": "projectScope",
  "Content-Type": "application/json"
};

//to UPDATE  port
data=
{
    "port": "52be2bcf-d030-45da-9269-eb9d7047847f",
    "is_port_security_enabled": true,
    //"security_group_ids": [ 
     // "72e4ac3a-f4af-48f3-8440-81375487ec73"
    //]
  }

request
  .update("http://app.ivolve.io:30627/api/v1/service/network/update_port", {
    data:data,
    headers: headers
  })
  .then(res => {
    console.log("res = ", res);
  })
  .catch(rej => {
    console.log("error = ", rej.data);
  });
