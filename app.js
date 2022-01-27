const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
  // console.log(__dirname);
  res.sendFile(__dirname + "/bmicalculator.html");
});
app.post("/bmicalculator",function(req,res){
  var w = parseFloat(req.body.w);
  var h = parseFloat(req.body.h);
  h = h/3.281;
  h = Math.pow(h,2);
  var bmi = (w/h).toFixed(1);
  res.send("Your BMI is: " + bmi);
});

app.listen(process.env.PORT || 3000,function(){
  console.log("Server started at port 3000");
});
