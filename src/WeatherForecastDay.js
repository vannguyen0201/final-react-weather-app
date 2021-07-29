import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function day(){
        let days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        let date = new Date(props.data.dt *1000);
        let day = date.getDay();

        return days[day];

    }

    return (
        <div>
            <div className="day-of-week">{day()}</div>
                    <div className="forecast-icon">
                    <WeatherIcon icon={props.data.weather[0].icon} size="50"/>
                    </div>
                    <span className="forecast-max-temp">{Math.round(props.data.temp.max)}° </span>
                    <span className="forecast-min-temp">{Math.round(props.data.temp.min)}°</span>
        </div>
    )
}