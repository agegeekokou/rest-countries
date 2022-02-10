
async function render(){
    let response = await fetch("https://restcountries.com/v3.1/region/europe?fields=name,maps,cca2,capital");
    const countries = await response.json();
    let listOfCountries = "";
    
// Génération de la liste déroulante
    for(let country of countries){
        listOfCountries = countries.map(country => `<option value="${country.cca2}"${country.cca2 == "FR" ? 'selected' : ''}>${country.name.official}</option>`);   
    }
    const element = document.querySelector("#countries");
    element.innerHTML = listOfCountries;
    

// Affichage de la carte de la France    
    response = await fetch(`https://restcountries.com/v3.1/alpha/FR?fields=capitalInfo`);
    const france = await response.json();
    let mapsOfCountries = `https://www.google.com/maps/embed/v1/view?key=AIzaSyAWHSmK2mrqS2Dg_E8DPygukjvKPCOqcKk&center=${france.capitalInfo.latlng[0]},${france.capitalInfo.latlng[1]}&zoom=10&language=en`;
    let map = document.querySelector("#maps");
    map.src = mapsOfCountries;
     
}
// Affichage de la carte des autres pays
async function changeMap(event){
    const responseMaps = await fetch(`https://restcountries.com/v3.1/alpha/${event.target.value}?fields=capitalInfo`);
    const country = await responseMaps.json();
    let mapsOfCountries = `https://www.google.com/maps/embed/v1/view?key=AIzaSyAWHSmK2mrqS2Dg_E8DPygukjvKPCOqcKk&center=${country.capitalInfo.latlng[0]},${country.capitalInfo.latlng[1]}&zoom=10&language=en`;
    let map = document.querySelector("#maps");
    map.src = mapsOfCountries;    
}
// Gestion des evenements
window.addEventListener("load", render());

let countries = document.querySelector("#countries");
countries.addEventListener("change", function(event){
    changeMap(event);
});
