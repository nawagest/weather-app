module.exports.getData = () => {
    const apiKey = process.env.APPID;
    const { cityName, units: u} = req.body;
    const q = cityName;
    
    // const units = req.body.units === 'F' || req.body.units === 'f' ? 'imperial' : 'metric';

    let units = 'imperial'; // Default
    if((u === 'F' || u === 'f' || u === 'Fahrenheit' || u === 'fahrenheit')) {
        units = 'imperial';
    } else if((u === 'C' || u === 'c' || u === 'Celsius' || u === 'celsius')) {
        units = 'metric';
    }

    const symbol = units === 'imperial' ? '℉' : '℃';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiKey}&units=${units}`;

    https.get(url, (response) => {

        const status = response.statusCode;

        response.on('data', (data) => {

            if(status === 200) {

                // Destructure this further (MAKE IT LOOK NICER)
                const jsonData = JSON.parse(data);
                const { weather, name, sys } = jsonData;
                const { country } = sys;
                const { main } = jsonData;
                const { temp, feels_like, temp_min, temp_max, humidity } = main;
                const [ info ] = weather;
                const { main: sky, description: desc, icon } = info;
                iconFile = icon;
                // console.log(info);

                res.render('weather', { temp, feels_like, temp_min, temp_max, humidity, sky, desc, icon, country, name, symbol });
            } else {
                const { cod, message } = JSON.parse(data);
                res.render('error', { cod, message });
            }
            // res.render('index', { jsonData });
        });
    });
}