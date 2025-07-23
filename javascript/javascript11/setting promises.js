function savetoDb(data,sucess,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        sucess();
    }
    else{
        failure();    
    }
} 
savetoDb("apna college",
    ()=>{
        console.log("sucess:your data was saved:"); 
        savetoDb("hello world",()=>{
            console.log("sucess2: data is saved");
            savetoDb("manhuu",()=>{
                console.log("sucess3:data saved");
            },()=>{
                console.log("failure:3 data is failed to save");
            })
        }, ()=>{
            console.log("failure2:weak connnection");
        })
    },
    ()=>{
        console.log("failure:weak connection .data is not saved");
    }
);