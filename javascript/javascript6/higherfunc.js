function multipleGreet(func, count){
    for(let i=1;i<=count;i++){
        func();
    }
} 
let greet=function(){
    console.log("je;;");
} 
multipleGreet(greet,1000);