let express = require("express");
let bodyParser = require("body-parser");

const app = express();
const theParser = bodyParser.json();

app.get("/secret",function(request,response,next){
    response.send("Secret Information");
   });

   
app.listen(3002, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3002");
});
