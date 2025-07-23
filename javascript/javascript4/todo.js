let todo=[];
let req=prompt("please enter your choice");
while(true){
    if(req=="quit"){
        console.log("quiting app"); 
        break;
    } 
    if(req=="list"){
        console.log("________________");
        for(to of todo){
            console.log(to);
        }
        console.log("___________________________");
    }else if(req="add"){
        let task=prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    } 
    else if(req=="delte"){
        let idx=prompt("please enter the idx you want to delte");
        todo.splice(idx,1);
    }
    req=prompt("please enter your request");
}