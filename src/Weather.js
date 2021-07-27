import React, { useState } from "react";
import axios from "axios";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            city: response.data.name,
            country: response.data.sys.country,
            wind: response.data.wind.speed,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            icon: "https://www.pikpng.com/pngl/b/190-1909381_weather-symbols-png-weather-symbol-vector-free-clipart.png",
            description: response.data.weather[0].description,
            date: "Tuesday, 27 July 2021"
        })
    }

    if (weatherData.ready) {
    return (
        <div className="card">
          <div className="card-body">
            <h1 className="fw-bold">What's the weather in ...?</h1>
            <div className="row" id="search-bar">
                <div className="col-10">
                    <form className="search-form" id="search-form">
                    <div className="row">
                        <div className="col-10">
                        <div className="mb-3">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a city..."
                            id="search-city"
                            />
                        </div>
                        </div>
                        <div class="col-2">
                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="Search"
                            id="check-btn"
                        />
                        </div>
                    </div>
                    </form>
                </div>
                </div>
                <h2 className="fw-bold">
              <span id="city">{weatherData.city}</span>, <span id="country">{weatherData.country}</span>
            </h2>
            <ul>
                <li>
                    {weatherData.date}
                </li>
                <li className="text-capitalize">
                    {weatherData.description}
                </li>
            </ul>
            <div className="row">
              <div className="col-6">
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  className="float-start"
                  id="icon"
                />
                <div className="float-start">
                  <span id="temperature">{Math.round(weatherData.temperature)}</span>
                  <span id="units">
                    <span href="#" id="celcius">
                      °C
                    </span>
                    |
                    <span href="#" id="fahrenheit">
                      °F
                    </span>
                  </span>
                </div>
              </div>
              <div className="col-6">
              <div id="indicators">
                <strong>Feels like</strong>: {Math.round(weatherData.feelsLike)}°C
                <br />
                <strong>Humidity</strong>: <span>{weatherData.humidity}</span>%
                <br />
                <strong>Wind </strong>: <span>{Math.round(weatherData.wind)}</span>km/h
                </div>
              </div>
            </div>
          </div>
        </div>
    )
    } else {
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=ae3ffbb2ba5fd172289cc56d929ac85e`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading..."
    }
}