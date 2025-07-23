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
let delBtns=document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        console.log("clicked now!!");
        
    });
}
