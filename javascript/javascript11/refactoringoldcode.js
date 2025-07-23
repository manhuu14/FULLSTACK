h1=document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            h1.style.color=color; 
            resolve("color changed!")
        },delay);      
    });
}
changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})



function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("sucess:data was saved");
        }
        else{
            reject("failure:weak connection");
        }
    })
}