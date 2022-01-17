
async function render(){
    const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=flags,name,capital,maps");
    const countries = await response.json();
    let cardsOfCountries = "";
    for(let country of countries){
        cardsOfCountries += `<div class="col" >
                                <div class="card h-100">
                                    <a href="${country.maps.openStreetMaps}" target="_blank"><img src="${country.flags.png}" class="card-img-top" alt="flags"></a>   
                                    <div class="card-body">
                                        <h5 class="card-title">${country.name.official}</h5>
                                        <p class="card-text">${country.capital}</p>
                                    </div>
                                </div>
                            </div>`;

    }
    
    document.querySelector('#cards').innerHTML = cardsOfCountries;
}
window.addEventListener("load", render());