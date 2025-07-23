function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
printInfo("shradha",23);
function avg(a,b,c){
    console.log(a+b+c);
} 
function printTabele(n){
    for(let i=1;i<11;i++){
        console.log(`2*${i}=${2*i}`);
    }
} 
//return in fuctions  
function sum(a,b){
    return a+b;
} 
let s=sum(3,4);
console.log(s);
function sumOfn(n){
    let a=0;
    for(let i=0;i<=n;i++){
        a=a+i;
    }
    return a;
}
// concatination of all string 
let str=["hi","hello","bye","!"];
function concat(str){
     let result="";
     for(let i=0;i<str.length;i++){
        result+=str[i];
     }
     return result;
}