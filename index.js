//npm init
// npm i express
// npm i monk

//index.js
//node index.js

//mongodb install
// use mydb
// db
// db.createCollection("users")

//require express
const express = require('express') //node_modules
const app = express();

const db = require('monk')('localhost:27017/mydb');


app.get("/insert" , function(req,res){
var rec = [
{name:"rakesh",age:20,location:"mumbai"},
{name:"ramesh",age:21},
{name:"ram",age:22}
];
db.get("users").insert(rec).then(function(result){
console.log(result)
res.send("insert Done")
})
})
app.get("/select" , function(req,res){

db.get("users").find({$or:[{name:"rakesh"},{age:22}]}).then(function(result){
console.log(result)
res.send("select Done")
})
})
app.get("/delete" , function(req,res){
db.get("users").remove({name:"rakesh"}).then(function(result){
console.log(result)
res.send("Delete Done")
})
})
app.get("/update" , function(req,res){
db.get("users").update({name:"ramesh"},{$set:{name:"ramesh1",age:25}}).then(function(result){
console.log(result)
res.send("update Done")
})
})

app.listen(4000);
//localhost:4000/insert