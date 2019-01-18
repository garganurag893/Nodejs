var express=require("express");
var app=express();

app.get("/",function(req,res){
    res.send("Hi!! Welcome to the assignment");
});
app.get("/speak/:animal",function(req,res){
    var test=req.params.animal;
    var sound="";
    if(test==='pig')
    {
        sound="oink";
    }
    if(test==='cow')
    {
        sound="mow";
    }
    if(test==='dog')
    {
        sound="bau";
    }
   res.send("The "+test+" says "+sound); 
});
app.get("/repeat/:word/:times",function(req, res) {
   var word=req.params.word; 
   var times=req.params.times;
   var result="";
   for(var i=0;i<times;i++)
   {
       result=result+word;
   }
   res.send(result);
});
app.get("*",function(req,res){
   res.send("Sorry web page not found."); 
});
app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server has started");
});