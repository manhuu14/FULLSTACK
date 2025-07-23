let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("div was clicked");
});
ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("li was clicked");
    });
} 
// when we nested elements assumenwhen we click inner element automatically triggeer or print or work parent worls also 
// when we click child element in html automatically parent element also works means 
//ex when  i give function to parent and child seperatedly but they are all inheritance in that case, when we click the child elment automatically 
// parent function also works to stop this we use stoppropagation 
//event have lots of function this is one of them we learn more in furtherly  

