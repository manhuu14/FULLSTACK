let jsonRes=`{"fact":"A cat has approximately 60 to 80 million olfactory cells (a human has between 5 and 20 million).","length":96}`;

//in this case we cant directly acess inside values to acess json we need to 

let validRes=JSON.parse(jsonRes);
console.log(jsonRes);
console.log(validRes.fact);

let student={
    name:"shardha",
    marks:95,
};