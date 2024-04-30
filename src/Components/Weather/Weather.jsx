import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./weatherStyling.js";


const key = "817c149bd5e6a009581bffb0286ca824"
const weatherRequest = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather?",
    params: {
        appid: key,
        units: "metric",
    }
})

export default function Weather() {
    const [location, setLocation] = useState(null)
    const [error, setError] = useState(null);
    const [temp, setTemp] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);

    const weatherStyle = styles();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({ lat: position.coords.latitude, lon: position.coords.longitude })
        });
    }, [])

    useEffect(() => {
        weatherRequest.defaults.params = { ...weatherRequest.defaults.params, ...location }
        if (weatherRequest.defaults.params.lat) {
            weatherRequest.get()
                .then(reponse => reponse.data)
                .then(data => getData(data))
                .catch(error => setError(error))
        }
    }, [location])

    const getData = (data) => {
        const { main, weather } = data;
        const { icon } = weather[0];
        const { temp } = main;
        setTemp(parseInt(temp))
        setWeatherIcon(icon);
    }

    return (
        <>
        {location ? (
            <div className={weatherStyle.container}>
                {error ? (<h1> Error Fetching Weather</h1>) :
                    <>
                        <div>Weather</div>
                        <p> <img className={weatherStyle.weatherIcon} src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="weather icon" /> <span>{temp}</span></p>
                    </>
                }
            </div>) : "" }
        </>
    )
}
