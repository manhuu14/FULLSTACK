let btn=document.querySelector("button");  
let ul=document.querySelector("ul");     
let inp=document.querySelector("input"); 

btn.addEventListener("click",function(){      
    let li=document.createElement("li");  
    li.innerText=inp.value; 
    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    li.appendChild(delBtn); 
    ul.appendChild(li); 
    inp.value=""; 
}); 

ul.addEventListener("click",function(event){ 
    //console.dir(event.target.nodeName);
    //console.log("button clicked"); 
    if(event.target.nodeName=="BUTTON"){
     let item=event.target.parentElement; 
     item.remove();
     console.log(item);  
     console.log("delete");
    }
}); 
//not an important topic
