var express=require("express");
var app=express();
var bodyparser=require("body-parser");
var friends=["Anurag","Anvi","Simran","Aman"];
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home.ejs");
});
app.get("/friends",function(req,res){
    res.render("friends.ejs",{friends:friends});
});
app.post("/addfriend",function(req,res){
    friends.push(req.body.name);
    res.redirect("/friends");
});
app.get("*",function(req,res){
   res.send("Sorry web page not found."); 
});
app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server has started");
});