import React, { useState } from "react";
import WeatherData from "./WeatherData";
import axios from "axios";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            city: response.data.name,
            country: response.data.sys.country,
            wind: response.data.wind.speed,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000)
        })
    }

    function search(){
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ae3ffbb2ba5fd172289cc56d929ac85e`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function changeCity(event) {
        event.preventDefault();
        setCity(event.target.value);
    }

    if (weatherData.ready) {
    return (
        <div className="card">
          <div className="card-body">
            <h1 className="fw-bold">What's the weather in ...?</h1>
            <div className="row" id="search-bar">
                    <form className="search-form" id="search-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-10">
                        <div className="mb-3">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a city..."
                            autoFocus="on"
                            id="search-city"
                            onChange={changeCity}
                            />
                        </div>
                        </div>
                        <div className="col-2">
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
                <WeatherData data={weatherData}/>
                </div>
        </div>
    )
    } else {
        search();

        return "Loading...";
    }
}