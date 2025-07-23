//let btn=document.querySelector('button');        
//console.dir(btn);                        
//btn.onclick=function(){             
//console.log("button was clicked");    
//alert('button is ready');    
//}                                     
//multiple buttons property  

let btns=document.querySelectorAll('button');
for (btn of btns){
    btn.onclick=sayHello;
    btn.onmouseenter=function(){
        console.log("you entered a button");
    } 
}
function sayHello(){
    alert('hello');
}
btn.onclick=sayHello; 


