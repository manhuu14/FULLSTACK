//array litterals
let arr=[1,2,3,4];
let newarr=[...arr];
let char=[..."hello"];  
let odd=[1,2,5,7,9];
let even=[2,4,6,8];
let nums=[...even,...odd];
//object litterals
const  data={
    email:"ironman@gmail.com",
    password:"abcd",
};
const dataCopy={...data, id:123,country:"india"}; 

let arrr=[1,2,3,4,5];//val
let obj1={...arrr};//key val   stored in val place not in key place 
function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us", args[i]);
    }
}
function min(){
    console.log(arguments);
    console.log(arguments.length);
} 
function sum(...args){
    return args.reduce((sum,el)=> sum+el);
}
function min(...args){
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }

    });
}