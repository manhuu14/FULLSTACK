let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();

    let inp=document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);      
});
form.addEventListener("submit",function(event){
    event.preventDefault();

    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);   
    alert(`hi ${user.value}, your password is set to ${pass.value}`)
}) 
// this element writing this we are denothing form in the below code

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(form);
    //when we acces form with dir form there will be elements inside form we can acces elments by this method;
    let user=this.elements[0];
    let pass=this.elements[1]; 

    console.log(user.value);
    console.log(pass.value);

    alert(`hi ${user.value},your password is set to ${pass.value}`);
});
