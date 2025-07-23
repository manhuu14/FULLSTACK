// write an arrow functio that returns the square of a number 'n'
let num=(a,b)=>{
    return a*b;
}  
num(1,2);
//write a function that prints hello world 5 times at intervals of 2s each  
let id=setInterval(function(){
    console.log("hello world");
},4000);
console.log(id); 
// write an arrow function named arrayAverage that accepts an array of numbers and return the average of those numbers.
let arrayAverage=(arr)=>{
    let total=0;
    for(let number of arr){
        total+=number;
    }
    return total/arr.length;
}
let isEven=(n)=>{
    return n%2==0;
} 
//
const object ={
    message:'Hello,world!',
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);