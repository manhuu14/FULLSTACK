let todo=[];

let request=prompt("please enter Your Request");

while(true){
    if(request==="quit"){
        console.log("quitting app");
        break;
    } 
    if(request=="list"){
        console.log("---------------------------------------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("---------------------------------------------");
    }else if(request=="add"){ 
        let task=prompt("please enter list");
        todo.push(task);
        console.log("task is added");
    }else if(request=="delete"){
        let idx=prompt("please enter the task index");
        todo.splice(idx,1);
        console.log("target is deleted");
    }
    request=prompt("please enter your request");
}