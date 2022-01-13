async function render(){
    const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=name,area,population,capital");
    const countries = await response.json();
    let tableOfCountries = "";
    for(let country of countries){
        
        tableOfCountries += `
        <tr>
            <th class="text-nowrap">${country.name.official}</th> 
            <td>${new Intl.NumberFormat('en-EN').format(country.area)}</td> 
            <td>${new Intl.NumberFormat('en-EN').format(country.population)}</td> 
            <td class="text-nowrap">${country.capital}</td>
        </tr>`;
    }

    const element = document.querySelector("#countries");
    element.innerHTML = tableOfCountries;
}
window.addEventListener("load", render());
