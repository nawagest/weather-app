const geolocation = document.querySelector('.geolocation');
const geoBtn = document.querySelector('.geo-btn');

geoBtn.addEventListener('click', () => {
    fetch('/coords')
});