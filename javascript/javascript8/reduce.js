let nums=[1,2,3,4,7,9,8];
let finalVal=nums.reduce((res,el) => {
    console.log(res);
    return res+el;
});
console.log(finalVal);
//maximum finding 
/*let max=-1;
for(let i=0;i<nums.length;i++){
    if(max<nums[i]){
        max=nums[i];
    }
}
console.log(max);*/
// reduce methodd
let max=nums.reduce((max,el) =>{
    if(max<el){
        return el;
    }else{
        return max;
    }
}); 
console.log(max);
