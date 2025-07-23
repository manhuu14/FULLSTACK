const express=require("express");
const app = express();
const path=require("path");
const port=8080; 

app.use(express.static("public"));
app.set("view engine","ejs");  
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});  

app.get("/ig/:username",(req,res)=>{  
    let {username}=req.params;
    const instagramData=require("./data.json");  
    const data=instagramData[username];
    console.log(data);
    //const followers=["anni","manni","carrit","bob"];
   // let {username}=req.params; 
   if(data){

    res.render("instagram.ejs",{data});
   }else{
    res.render("error.ejs");
   }
})

app.get("/hello",(req,res)=>{
    res.send("hello");
}); 

app.get("/rolldice",(req,res)=>{ 
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:diceVal});
}); 


app.listen(port,()=>{
    console.log(`listening on port${port}`);
});