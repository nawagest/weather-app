const weatherSearch = document.querySelector('.weather-search');
const weatherUnits = document.querySelector('.weather-units');
const searchForm = document.querySelector('.search-form');
const geoBtn = document.querySelector('.geo-btn');

geoBtn.addEventListener('click', () => {

    const geolocation = navigator.geolocation;

    geolocation.getCurrentPosition((coords) => {

        const { coords: { latitude: lat, longitude: lng } } = coords;
        const data = JSON.stringify({ lat, lng });
        console.log(coords)
        console.log(data);

        fetch('/coords', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })
        .then(res => res.json())
        .then(data => {
            weatherSearch.value = data.name;
            weatherUnits.value = 'F';
            searchForm.submit();
        });
    });
});