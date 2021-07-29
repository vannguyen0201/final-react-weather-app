import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null)

    function displayForecast(response) {
        setForecastData(response.data.daily);
        setLoaded(true)
    }

    if (loaded) {
        return (
            <div className="row mt-5 weather-forecast">
                <div className="col-sm forecast-day">
                    <WeatherForecastDay data={forecastData[0]} />
                </div>
            </div>
        );
    } else {}


    let apiKey = "ae3ffbb2ba5fd172289cc56d929ac85e";
    let latitude = props.data.lat;
    let longitude = props.data.lon;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
    axios.get(apiURL).then(displayForecast);

    return null;
}