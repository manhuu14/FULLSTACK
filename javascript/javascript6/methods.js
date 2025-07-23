const calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
} 
console.log(calculator.add(1,2));
//arays and strings are internally stored as objects 
//methods shorthand
const ss={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
} 
console.log(ss.add((1,2)));