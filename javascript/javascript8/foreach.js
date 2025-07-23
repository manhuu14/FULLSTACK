let arr=[1,2,3,4,5]; 
let print=function(el){
    console.log(el);
} 
arr.forEach(print); 
arr.forEach((el) => {
    console.log(el);
}); 
let aarr=[
    {
        name:"aman",
        marks:"9",
    },
    {
        name:"manu",
        marks:"90",
    },
    {
        name:"arrow",
        marks:"95.55",
    }


];
aarr.forEach((aarr) => {
    console.log(aarr.name);
});