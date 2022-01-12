
async function render(){
    const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=name");
    const countries = await response.json();
    let listOfCountries = "";
    for(let country of countries){
        listOfCountries += `<li>${country.name.official}</li>`;
    }
    const element = document.querySelector("#countries");
    element.innerHTML = listOfCountries;
}
window.addEventListener("load", render());