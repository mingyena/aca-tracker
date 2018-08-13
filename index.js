let express = require("express");
let clients = require("./clients.js");
let fetch = require('node-fetch');
let bodyParser = require("body-parser");

const app = express();
let theParser = bodyParser.json();

let lastClientID = 0;
let client = [];

app.use(theParser);

app.use(express.static('public'));



app.post("/clients",function(request,response){
    let newClient = {};
    newClient = request.body;
    newClient.clientId = parseInt(clients[clients.length-1].clientId)+1;
   // console.log(request.body);
    newClient.long=" ";
    newClient.location= ""; 
    clients.push(newClient);
    return response.json(clients);
   });

app.post("/locations",function(request,response,next){
    let newClient = {"id":3, "lat":"30.23","long":"-97.7"};
    let fetch = require('node-fetch');

    fetch('http://nominatim.openstreetmap.org/reverse?format=json&lat='+newClient.lat+'&lon='+newClient.long+'&zoom=18&addressdetails=1', 
    { 
    method: 'GET', 
    headers: {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
    }
    })
    .then(response => response.json())
    .then(data => {
        newClient.lat = data.lat;
        //console.log(data.lat);
        newClient.long = data.lon;
        newClient.address = data.address;
        clients.push(newClient);
        return response.json(clients);
    });




});

app.get("/locations",function(request,response,next){
    return response.json(clients);
});
   
app.listen(3002, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3002");
});
