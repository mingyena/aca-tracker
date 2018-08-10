let express = require("express");
let clients = require("./clients.js");
let bodyParser = require("body-parser");

const app = express();
const theParser = bodyParser.json();

let lastClientID = 0;
let client = [];

app.use(express.static('public'));



app.get("/clients",function(request,response,next){
    let newClient = {"name":"Bob"};
    newClient.clientId = parseInt(clients[clients.length-1].clientId)+1;
    newClient.long="";
    newClient.location="";
    clients.push(newClient);
    return response.json(clients);
   });

app.post("/locations",function(request,response,next){

});


   
app.listen(3002, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3002");
});
