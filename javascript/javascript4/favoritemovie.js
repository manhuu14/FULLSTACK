let favmovie="Gajiniii";
let guess=prompt("enter favMovie");
while(true){
    if(guess=="quit"){
        console.log("you are quit"); 
        break;
    } 
    else if(guess==favmovie){
        console.log("you guessed the correct one"); 
        break;
    } 
    else{
        guess=prompt("you entered wrong one try again");
        console.log(guess);
    }
}