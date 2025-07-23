let num=[1,2,3,4];
let double=num.map((el)=>{
    return el*2;
}) 
let students=[
    {
        name:"hello",
        marks:88,
    },
    {
        name:"hello",
        marks:8,
    },
    {
        name:"hello",
        marks:78,
    }
];
let gpa=students.map((el)=>{
    return el.marks/10;
}) ;
//filter 
let ans=num.filter((el)=>{
    return el%1==0;
});