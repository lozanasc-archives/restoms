const WeatherAPI = async() => {
    try {
        const WeatherData = await fetch("https://visual-crossing-weather.p.rapidapi.com/forecast?location=Dumaguete%2CPH&aggregateHours=24&contentType=json&shortColumnNames=0&unitGroup=metric", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.API_KEY,
                "x-rapidapi-host": process.env.API_HOST
            }
        });
        if(WeatherData.ok)
            return WeatherData.json();
    } catch (error) {
        console.error(error);
    }
}

const Temperature = () => {
    WeatherAPI()
    .then(({locations: {"Dumaguete,PH": {currentConditions: {temp: Temperature}}}}) => {
        switch(Temperature){
            // Write cases by weather status not by temp
            default:
                console.trace('Something bad happened 😢');
        }
    })
    .catch(Error => console.trace(Error));
}

export default Temperature;