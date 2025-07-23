let btns=document.querySelectorAll("button");
for(btn of btns){
    //btn.onclick=sayHello;
    //btn.onclick=sayName; 
    //btn.addEventListener("click",sayHello);
    //btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("you double click");
    });

}
function sayHello(){
    alert("hello!");
}
function sayName(){
    alert("apna college");
} 
// onclicking multiple functions are not working so we are using this event listeners 
// single object can perform multiple event listners 

// upto now we see buttons only now we can see multiple elemnts 
let p=document.querySelector("p");
p.addEventListener("click",function(){
    console.log("parah was clicked");
}) 
let box=document.querySelector(".box");
box.addEventListener("mouseenter",function(){
        alert("on the div tag");
})