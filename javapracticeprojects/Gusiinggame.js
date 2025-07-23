let user=prompt("enter a number");
let a=Math.floor(Math.random()*user)+1;

let guess=prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    } 
    if(guess == a){
        console.log("you are right! congrats!!");
        break;
    }else if(guess< a){
        guess=prompt("hint: your guess was too small. please try again"); 
    }
    else{
        guess=prompt("hint: your guess was too large. please try again");
    }
}