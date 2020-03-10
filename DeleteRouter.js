console.log("hello2");
const request = require("umi-request").default;
headers = {
  "x-auth-token":"gAAAAABeXgzk_LLD7wwtaJjcKphjWlvL6s62WsYz53NYBpbhB4kQKfba23kV9jPN6Svoual6F6qMwx3d8sNFOOqJxz5l4HAsCeP5iSnLDusuXSFUo6XqGhAyEeHO3TypkSzmbeFAq-eT111LSv_ffz1QXuHUBfyDe8EgXMQSW9_H04RWLT1rR-Ht9KEdCn5Oals748zugR4m",
  "x-org": "5be5267714ac4f4abe4f064452113560",
  "x-scope": "projectScope",
  "Content-Type": "application/json"
};

//Delete  ROUTER
data={
    "id": [
      "7626249e-a74b-476c-badb-f2b29ba3bcae"
    ]
  }
request
  .post("http://app.ivolve.io:30627/api/v1/service/network/delete_router", {
    data:data,
    headers: headers
  })
  .then(res => {
    console.log("res = ", res);
  })
  .catch(rej => {
    console.log("error = ", rej.data);
//    console.log("status Code : ", rej.response.status) 
    console.log("status Code: ", rej.response.status)
  });
