import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Melbourne,AU"/>
      <div className="signature">
        <a href="https://github.com/vannguyen0201/final-react-weather-app" target="_blank" rel="noreferrer">Open-source code</a> by LittleVan
      </div>
      </div>
    </div>
  );
}

export default App;
