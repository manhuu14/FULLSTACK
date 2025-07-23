let btn=document.querySelector("button");

btn.addEventListener("click", async()=>{
    let fact=await getFacts(); 
    console.log(fact);
    let p=document.querySelector("#fact"); 
    p.innerText=fact;

})


let url="https://catfact.ninja/fact"; 
let url2="https://dog.ceo/api/breeds/image/random"

//we have methods go see axios on github

// why we using axios already we having fetch?
//fetch is more response readable data is not exactly json we want to parse data in fetch
//in axios we can directly acces data

async function getFacts() {
    try{
        //when we want data in the form of json we use config
        const config={headers:{Accept:"application/json"}};
        let res=await axios.get(url,config);
        return res.data.fact;
    }catch(e){
        console.log("error-",e);
        return "No fact found";
    }
}