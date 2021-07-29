import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherData(props) {
    return (
        <div>
            <h2 className="fw-bold">
              <span id="city">{props.data.city}</span>, <span id="country">{props.data.country}</span>
            </h2>
            <ul className="mb-3">
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">
                    {props.data.description}
                </li>
            </ul>
            <div className="row weatherData">
              <div className="col-sm-6">
                <div className="float-start">
                <WeatherIcon icon={props.data.icon} size="80" id="icon"/>
                </div>
                <div className="float-start">
                  <WeatherTemp celsius={props.data.temperature} />
                  
                </div>
              </div>
              <div className="col-sm-6">
              <div id="indicators">
                <strong>Feels like</strong>: {Math.round(props.data.feelsLike)}°C
                <br />
                <strong>Humidity</strong>: <span>{props.data.humidity}</span>%
                <br />
                <strong>Wind </strong>: <span>{Math.round(props.data.wind)}</span>km/h
                </div>
              </div>
            </div>
          </div>
        
    )
}