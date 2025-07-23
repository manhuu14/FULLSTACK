let sum=54;//global scope 
function calSum(a,b){
    let sum=a+b;//Function Scope
    console.log(sum);
}
calSum(1,2);