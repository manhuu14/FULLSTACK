const express = require("express"); 
const methdOveride=require("method-override");
const app = express(); 
let port = 8080;  
const path = require("path"); 

const {v4:uuidv4}=require('uuid');
//v4 means version 4 of creating this type of ones 

app.use(express.urlencoded({ extended: true })); 
app.use(methdOveride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); 
app.use(express.static(path.join(__dirname,"public"))); 

let posts=[
    { 
        id:uuidv4(),
        username:"apnacollege",
        content:" I love ooty"
    },
    { 
        id:uuidv4(),
        username:"thinkin new one",
        content:" I love gooty"
    },
    {
        id:uuidv4(),
        username:"better",
        content:" I love yathch"
    },
    {
        id:uuidv4(),
        username:"praste",
        content:" I love enemy"
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
}); 
app.get("/posts/new", (req,res)=>{ 
    res.render("new.ejs");
}); 

app.post("/posts", (req,res) =>{ 
    let {username, content} = req.body; 
    let id = uuidv4(); 
    posts.push({username,content,id});
    res.redirect("/posts");
});


app.get("/posts/:id", (req,res) =>{ 
    let {id}=req.params;  
    let post=posts.find((p) => id===p.id); 
    console.log(post);
    res.render("show.ejs",{post})
});

app.patch("/posts/:id", (req,res)=>{ 
    let { id } =req.params; 
    let newContent=req.body.content;
    let post=posts.find((p) => id===p.id); 
    post.content=newContent; 
    console.log(post);
    
    console.log(newContent);
    console.log(id);
    res.redirect("/posts")
})

app.get("/posts/:id/edit",(req,res)=>{
    let { id } =req.params;  
    let post=posts.find((p) => id===p.id);  
    res.render("edit.ejs", {post})
})
 
app.delete("/posts/:id",(req,res)=>{
    let { id } =req.params;  
    posts=posts.filter((p) => id!==p.id);  
    res.redirect("/posts");
})
 

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
