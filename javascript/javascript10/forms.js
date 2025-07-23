let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("form submitted");
});
// when we want to prevent defualt things when some defualt function is performing than that will be stopped by this prevent
//event.preventDefualt();