const url23="https://icanhazdadjoke.com/"; 

async function getJokes(){
    try{
        let res = await axios.get(url23);
        console.log(res);

    }catch(err){
        console.log(err);
    }
}