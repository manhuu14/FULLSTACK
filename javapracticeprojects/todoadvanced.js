let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value; 


    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
});


let delbtns=document.querySelectorAll(".delete");
for(let delbtn of delbtns){
    delbtn.addEventListener("click",function(){
        let a=this.parentElement;
        console.log(a); 
        a.remove();
    });
} 
//new elements added cant be deleted so we use elevent delegation

