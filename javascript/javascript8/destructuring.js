let names=["tony","bruce","peter","steve"];
/*let winner=names[0];
let runnerup=names[1];
let secondRunnerup=names[2];*/
// destructuring                      
let[winner,runnerup,...others]=names;
//others stores that all remaining string words 
//using rest condition we can  store remaining all elements in one words like array 
//destructing objects 
const student={
    name:"karan",
    age:14,
    class:9,
    subjects:["hindi","english","math","science"],
    username:"karan@123",
    password:"abcd",
};
/*let username=student.username;
let password=student.password;*/
let{username,password}=student;