let inp=document.querySelector("input");
let btn=document.querySelector("button");

inp.addEventListener("keydown",function(event){
    console.dir(event); 
    console.log("key was pressed");
});
inp.addEventListener("keyup",function(){
    console.log("key was released");
});
inp.addEventListener("keydown",function(event){
    if(event.code=="ArrowUp"){
        console.log("character moves forward");
    }
    else if(event.code="ArrowDown"){
        console.log("character moves down");
    }
    else if(event.code=="ArrowLeft"){
        console.log("character moves left");
    }
    else if(event.code=="ArrowRight"){
        console.log("character moves right");
    }
});