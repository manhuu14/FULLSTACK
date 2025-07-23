
let newpara=document.createElement('p'); 
console.dir(newpara);
newpara.innerText="Hi, I am a new p";
// we can add elements in html page by js 
//this is the structure to create 
//we need to add some properties to visible on the screen 


let box=document.querySelector('.box');
let btn=document.createElement('button');
console.dir(btn);
btn.innerHTML="click me";
box.appendChild(btn);
let newp=document.querySelector('p');
console.dir(newp);

newp.innerText="hi hello new para";
'hi hello new para'
box.appendChild(newp);
newp.append("this is also newone");
newp.append(btn);
newp.append(btn);
newp.append("do not click this one");
box.prepend(newp); 
let a=document.createElement("button");
a.innerHTML="click me";
let b=document.querySelector("p");
b.insertAdjacentElement("beforeend",a); 
// for claritiy explainationn we nee  to see in the mdn website for all clarity information