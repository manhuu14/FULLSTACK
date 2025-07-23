let url="https://catfact.ninja/fact";

/*fetch(url)
    .then((response)=>{
        console.log(response);
        //console.log(response.json);//returns promise again now again returns promise again
// to acces the data inside the object we use
        response.json().then((data) =>{
            console.log(data);
        });
    })
    .catch((err)=>{
        console.log("erronr -", err);
    }) 
*/

    // accesing data 
    fetch(url)
        .then((response)=>{
            console.log(response);
            return response.json();
        })
        .then((data)=>{
            console.log(data.fact);
            return fetch(url);
        }) 
        .then((response)=>{
            return response.json();
        })
        .then((data2)=>{
            console.log("data2 = ", data2.fact);
        })
        .catch((err) =>{
            console.log("error -",err);
        }); 

    console.log("i am happy");