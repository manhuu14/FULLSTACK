const max = prompt("enter the max number");

const random = Math.floor(Math.random()* max)+1;

let guess=prompt("guess the number"); 

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }  
    
    if(guess==random){
        console.log("you are right! congrats!!"); 
        break;
    } 
    else if(guess<random){
        guess=prompt("your guess was too small. please try agian");
    }
    else{
        guess=prompt("your guess was too large.please try again");
    }
}