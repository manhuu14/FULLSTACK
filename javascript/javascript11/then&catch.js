function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("sucess:data was saved");//result
        }else{
            reject("failure: weak connection");//error
        }
    });
} 

/*savetoDb("apna college")
.then(()=>{
    console.log("data1 saved. promise was resolved.");
    savetoDb("helloworld")
    .then(()=>{
        console.log("data2 saved");
    });
})

.catch(()=>{
    console.log("promise was rejected");
})*/ 
 
//simply then is assumed as resolve
//and reject is assuemed as catch 
savetoDb("apna college")//to control this we use below then
.then((result)=>{
    console.log("data1 saved. promise was resolved.");
    console.log(result);
    return savetoDb("helloworld");//to control this we use below then;

})
.then((result)=>{
    console.log("data2 saved"); 
    console.log(result);
    return savetoDb("data3 saved");
}) 
.then((result)=>{  
    console.log("data3.saved");  
    console.log(result);  
})

.catch((error)=>{
    console.log("promise was rejected"); 
    console.log(error);
});