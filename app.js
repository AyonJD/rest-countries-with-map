const countryParent = document.getElementById('countries');
const countryCard = document.getElementById('single-country');
const faceData = () => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
        .then(res => res.json())
        .then(data => gateCountries(data))
}
faceData();
const gateCountries = countries => {
    const singleCountryData = countries.map(c => updateHtml(c)).join(' ');  //join(" ") dichi comma remove korar jonno
    countryParent.innerHTML = singleCountryData;
}
const updateHtml = ({ name, flags }) => {
    return countryCard.innerHTML = `
        <div class = 'country-inner'>
            <h1>${name.common}</h1>
            <img src = "${flags.png}">
        </div>
    `
}