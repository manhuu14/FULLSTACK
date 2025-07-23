async function greet(){
    return "hello";
} 
//async function atomatically they have promise in defualt in their function 
async function grot(){
    throw "random error";
    return "hello";
} 
greet().then((result)=>{
    console.log("promise was resolved");
    console.log("result was:",result);
})
.catch((err)=>{
    console.log("promise was rejected",err);
}) 

grot().then((result)=>{
    console.log("promise was resolved");
    console.log("result was:",result);
})
.catch((err)=>{
    console.log("promise was rejected:404 error ",err);
}) 
// arrow function 
let demo=async ()=>{
    return 5;
}