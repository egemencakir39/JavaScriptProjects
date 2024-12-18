const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const capital = document.querySelector(".capital");
const flag = document.querySelector(".IMG");
const continents = document.querySelector(".continents");
const currencies = document.querySelector(".currencies");
const population = document.querySelector(".population");
const timeZone = document.querySelector(".timeZone");


btn.addEventListener("click",e=>{
    e.preventDefault();
    const countryName = input.value.trim();
    getResult(countryName);
})


const getResult = (countryName) =>{
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then(displayResult)

}

const displayResult = (result)=>{
    capital.innerText = `Capital: ${result[0].capital}`;
    continents.innerText = `Continents: ${result[0].continents}`;
    population.innerText = `Population: ${result[0].population}`;
    timeZone.innerText = `TimeZone: ${result[0].timezones}`;
    flag.innerHTML = `<img class = "flag" src="${result[0].flags.png}" alt="">`

  
}