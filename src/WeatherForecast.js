import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import Loader from "react-loader-spinner";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null)

    function displayForecast(response) {
        setForecastData(response.data.daily);
        setLoaded(true)
    }

    useEffect(() => {
        setLoaded(false);
    }, [props.data]);

    if (loaded) {
        return (
            <div className="row mt-5 weather-forecast p-2">
                    {forecastData.map(function (dailyForecast, index) {
                        if (index < 6) {
                        return (
                            <div className="col-sm forecast-day" key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        );
                        } else {
                            return null;
                        }
                    })} 
            </div>
        );
    } else {}


    let apiKey = "5053a5d33399f0e64b5f308e6f69361b";
    let latitude = props.data.lat;
    let longitude = props.data.lon;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
    axios.get(apiURL).then(displayForecast);

    return (
        <Loader
            className="forecast-loading"
            type="ThreeDots"
            color="#364e68"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
      );;
}