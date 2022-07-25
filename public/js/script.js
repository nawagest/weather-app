const geoBtn = document.querySelector('.geo-btn');

geoBtn.addEventListener('click', () => {

    const geolocation = navigator.geolocation;

    geolocation.getCurrentPosition((coords) => {
        
        const { coords: {latitude:lat, longitude:lng} } = coords;
        const data = JSON.stringify({lat, lng });
        console.log(coords)
        console.log(data);

        fetch('/coords', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                data
            }
        })
        .then(res => res.json())
        .then(data => console.log(data));
    });
});