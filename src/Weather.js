import React, { useState } from "react";
import axios from "axios";

export default function Weather(){
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
              <span id="city">Melboune</span>, <span id="country">AU</span>
            </h2>
            <ul>
                <li>
                    Tuesday, 27 July 2021
                </li>
                <li>
                    Mostly Cloudly
                </li>
            </ul>
            <div className="row">
              <div className="col-6">
                <img
                  src="https://www.pikpng.com/pngl/b/190-1909381_weather-symbols-png-weather-symbol-vector-free-clipart.png"
                  alt=""
                  className="float-start"
                  id="icon"
                />
                <div className="float-start temperature-units">
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
              </div>
              <div className="col-6">
              <div id="indicators">
                <strong>Feels like</strong>:{" "}
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