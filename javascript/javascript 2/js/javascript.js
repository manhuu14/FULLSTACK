const favMovie="avatar";
let guess=prompt("guess the movie");
while((guess!=favMovie) && (guess!="quit")){
    console.log("this is wrong");
    guess=prompt("guess the movie name");
}  
if(guess==favMovie){
    console.log("congractulations");
}else{
    console.log("you quit");
}