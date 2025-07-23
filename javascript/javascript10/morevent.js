//changed attribute  
let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
});
let user=document.querySelector("#user");
user.addEventListener("changed",function (){
    console.log("input changed");
    console.log("final value", this.value);
});
//input attribute 
let forme=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
});
let usere=document.querySelector("#user");
user.addEventListener("input",function (){
    console.log("input changed");
    console.log("final value", this.value);
});