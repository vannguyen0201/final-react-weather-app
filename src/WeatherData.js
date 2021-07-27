import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherData(props) {
    return (
        <div>
            <h2 className="fw-bold">
              <span id="city">{props.data.city}</span>, <span id="country">{props.data.country}</span>
            </h2>
            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">
                    {props.data.description}
                </li>
            </ul>
            <div className="row">
              <div className="col-6">
                <img
                  src={props.data.icon}
                  alt={props.data.description}
                  className="float-start"
                  id="icon"
                />
                <div className="float-start">
                  <span id="temperature">{Math.round(props.data.temperature)}</span>
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