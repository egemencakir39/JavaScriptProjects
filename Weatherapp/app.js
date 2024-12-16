const inp = document.getElementById("INP");
const btn = document.querySelector(".btn");

btn.addEventListener("click",e=>{
    e.preventDefault();
    const cityName = inp.value.trim();
    getResult(cityName);
    inp.value = "";
})

const getResult = (cityName) => {
    const query = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=16a51ee406309a38e45ef48c1951dfd0&units=metric&lang=tr`
    fetch(query)
    .then((res) => res.json())
    .then(displayResult)
}

const displayResult = (result) =>{
 
    let city = document.querySelector(".city");
    city.innerText = `${result.name}  ${result.sys.country}`

    let temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(result.main.temp)}°C`
    
    let desc = document.querySelector(".desc");
    desc.innerText = result.weather[0].description

    let clouds = document.querySelector(".clouds");
    clouds.innerText = `%${result.clouds.all} Kapalı`
}