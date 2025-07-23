let quantity="S";
//depends on the quantity 
if(quantity=="S"){
    console.log("the cost of the popcorn is 30rupees! thank you visit again");
} 
else if(quantity=="M"){
    console.log("the cost of the popcorn is 50 rupess! thank you visit again")
} 
else if(quantity=="L"){
    console.log("the cost of the popcorn is 80rupees! thank you visit again");
} 
else{
    console.log("yeah you gained the large one for 90rupees! thank you visit again");
} 

// a good string start with a and contains minimum 3 letters or greater than that
let a="animal";
let b=a.length;
if( (a[0]=="a" || a[0]=="A") && b>3 ){
    console.log("this is the good one ");
}else{
    console.log("this is not that good");
}