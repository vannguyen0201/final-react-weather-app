import React, { useState } from "react";

export default function Weather(){
    return (
        <div className="card">
          <div className="card-body">
            <h1>What's the weather in ...?</h1>
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
            <h2>
              <span id="city">Melboune</span>, <span id="country">AU</span>
            </h2>
            <p className="date" id="currentDate">
              Tuesday, 20 July 2021
            </p>
            <div className="row">
              <div className="col-sm-6">
                <img
                  src="https://www.pikpng.com/pngl/b/190-1909381_weather-symbols-png-weather-symbol-vector-free-clipart.png"
                  alt=""
                  className="float-left"
                  id="icon"
                />
                  <span id="temperature">24</span>
                  <span id="units">
                    <span href="#" id="celcius" className="active">
                      °C
                    </span>
                    |
                    <span href="#" id="fahrenheit">
                      °F
                    </span>
                  </span>
              </div>
              <div className="col-sm-6">
                <div>
                    <strong>Feels like</strong>: 
                    <span id="feels-like"></span>°C
                    <br />
                    <strong>Humidity</strong>: <span id="humidity"></span>%
                    <br />
                    <strong>Wind </strong>: <span id="wind"></span>km/h
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}