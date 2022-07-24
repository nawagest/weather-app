const geoBtn = document.querySelector('.geo-btn');

geoBtn.addEventListener('click', () => {

    const geolocation = navigator.geolocation;

    geolocation.getCurrentPosition((coords) => {
        fetch('/coords', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                coords
            }
        })
    });
});