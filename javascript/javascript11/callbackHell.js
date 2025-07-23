h1=document.querySelector("h1");
function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange) nextColorChange();
    },delay);
}

changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("yellow",1000,()=>{
            changeColor("black",1000);
        });
    });
}); 

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed!");

        },delay);
    });
} 
changeColor("red",1000)
    .then(()=>{
        console.log("red color was completed")
        return changeColor("green",1000);
    })
    .then(()=>{
        console.log("green color was completed")
        return changeColor("blue",1000);
    })
    .then(()=>{
        console.log("blue color was completed")
        return changeColor("black",1000);
    })
    .then(()=>{
        console.log("black color was completed")
    }) 
    .catch(()=>{
        consolelog("error occured");
    })