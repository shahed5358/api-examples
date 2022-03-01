const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3> ${country.name.common} </h3>
        <p> ${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>
         `;
        countriesDiv.appendChild(div);
    })
}
const loadCountryByName = name => {
    const url = ` https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}

const displayCountryDetail = country => {
    console.log(country);
    const countriesDiv = document.getElementById('country-details');
    countriesDiv.innerHTML = `
    <h4>Name: ${country.name.common}</h4>
    <p>Population: ${country.population}</p>
    <img width:"200px" src= "${country.flag}"/>
    <p>Continents:${country.continents}</p>
    `
}