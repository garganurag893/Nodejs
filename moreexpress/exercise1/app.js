var express=require("express");
var app=express();

app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home.ejs");
});
app.get("/fell/:name",function(req,res){
    var name=req.params.name;
    res.render("love.ejs",{thing:name});
});
app.get("/posts",function(req,res){
    var post=[
        {title: "Post1" ,author:"Author1" },
        {title: "Post2" ,author:"Author2" },
        {title: "Post3" ,author:"Author3" },
            ];
    res.render("posts.ejs",{posts:post});
});
app.get("*",function(req,res){
   res.send("Sorry web page not found."); 
});
app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server has started");
});