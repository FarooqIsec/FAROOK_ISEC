const button = document.getElementById('btn');
const jokess = document.getElementById('jokes_display');
addEventListener('click', myJoke)
let apiKey = "TkzxG+axBHBUJEF/jLnbiQ==J07zM2gg5R2hH7OW";
let apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=";
const options ={
    method:"GET",
    headers: {
        'X-Api-Key': apiKey,
    },
}
async function myJoke(){
    const respond = await fetch(apiURL, options);
    const data_ = await respond.json();
    let jokes_para = data_[0].joke;
    jokess.innerText = jokes_para;
}