/*//event argument automatically callback argument in events
let btn =document.querySelector("button");
btn.addEventListener("click",function(event){
    console.log(event);
    console.log("button clicked");
});
btn.addEventListener("dblclick",function(event){
    console.log(event);
    console.log("button clicked");
});
//event object important */
// key board events
let inp=document.querySelector("input"); 
//event gives which key u enter by the argument event you may know about which one you entered
//
inp.addEventListener("keydown",function(event){
    console.log(event);
    console.log("key was pressed"); 
});
inp.addEventListener("keyup",function(){
    console.log("key was released");
});  
inp.addEventListener("keydown",function(event){
    console.log("code=",event.code);
    if(event.code=="ArrowUp"){
        console.log("character moves forward");
    }
    else if(event.code=="ArrowDown"){
        console.log("character moves backward");
    }
    else if(event.code=="ArrowLeft"){
        console.log("character moves left");
    }
    else if(event.code=="ArrowRight"){
        console.log("character moves right");
    }
});