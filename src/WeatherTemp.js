import React, {useState} from "react";

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState('celsius');

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if ( unit === 'celsius') {
    return(
        <div>
            <span id="temperature">{Math.round(props.celsius)}</span>
                  <span id="units">
                      °C | 
                    <a href="/" onClick={showFahrenheit}>
                      °F
                    </a>
                  </span>
        </div>
    )
    }   else {
        let fahrenheit = props.celsius * 9/5 + 32;
        return(
            <div>
                <span id="temperature">{Math.round(fahrenheit)}</span>
                      <span id="units">
                      <a href="/" onClick={showCelsius}>°C </a>| 
                          °F
                      </span>
            </div>
        )
    }
}