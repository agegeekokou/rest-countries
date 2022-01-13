async function render(){
    const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=name,area,population,capital");
    const countries = await response.json();
    let tableOfCountries = "";
    let formatNumber = new Intl.NumberFormat('en-EN')
    for(let country of countries){
        country.area = formatNumber.format(country.area);
        country.population = formatNumber.format(country.population);
        tableOfCountries += `
        <tr>
            <th class="text-nowrap">${country.name.official}</th> 
            <td>${country.area}</td> 
            <td>${country.population}</td> 
            <td class="text-nowrap">${country.capital}</td>
        </tr>`;
    }

    const element = document.querySelector("#countries");
    element.innerHTML = tableOfCountries;
}
window.addEventListener("load", render());
