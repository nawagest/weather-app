const weatherSearch = document.querySelector('.weather-search');
const weatherUnits = document.querySelector('.weather-units');
const searchForm = document.querySelector('.search-form');
const notification = document.querySelector('.notification');
const notificationText = document.querySelector('.notification-text');
const geoBtn = document.querySelector('.geo-btn');

geoBtn.addEventListener('click', () => {

    notification.classList.remove('hidden');
    const geolocation = navigator.geolocation;

    geolocation.getCurrentPosition((coords) => {
        const { coords: { latitude: lat, longitude: lng } } = coords;
        const data = JSON.stringify({ lat, lng });

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
    }, (err) => {
        notificationText.textContent = 'Could not get coordinates 😟 ...'
        console.log(err);
    });
});