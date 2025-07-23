const express = require('express')
const app = express();

console.dir(app);

let port=8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
app.get("/",(req,res)=>{
  res.send("you contact the root path");
});
app.get("/apple",(req,res)=>{
  res.send("you contacted apple path");
});

app.get("/orange",(req,res)=>{
  res.send("you contacted orange path");
});

app.get("/mango",(req,res)=>{
  res.send("you contacted mango path");
}); 
app.post("/",(req,res)=>{
  res.send("you sent a post request to root");
});  
app.get("/:username/:id",(req,res)=>{
  let {username,id}=req.params;
  let htmlstr="<h1>`welcome to the page of @${username}`</h1>"

  res.send(htmlstr);
})  
// for the query strings 
app.get("/search",(req,res)=>{
  let{q} =req.query;
  res.send(`search results for query:${q}`);
})
//app.get("*",(req,res) => {
//  res.send("this path does not exist");
//});// for all remaing one which cant we define then they throw error like this not an error showing this message for the user


/*app.use((req,res)=>{
    console.log("request received"); 
    //res.send("this is a basic response"); 
    /*res.send({
      name:"Apple", 
      color:"red"
    });
    let code="<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>"
    res.send(code);
}) */ 