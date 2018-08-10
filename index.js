let express = require("express");
let tracker = require("./tracker.js");
let bodyParser = require("body-parser");

const app = express();
const theParser = bodyParser.json();

let lastClientID = 0;
let client = [];

app.get("/clients",function(request,response,next){
    return response.json(tracker);
   });

   
app.listen(3002, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3002");
});
