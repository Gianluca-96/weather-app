import React, {useState} from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=56f56a0fa15d71cf040938507a7e4091&units=metric`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }



  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
       <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
          {data.weather ? <p>Clouds {data.clouds.all} %</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
          {data.weather ? <p className="bold">{data.main.feels_like}°C</p> : null}
            <p>Fells like</p>
          </div>
          <div className="humidity">
          {data.weather ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.weather ? <p className="bold">{data.wind.speed}KM/h</p> : null}
            <p>Wind</p>
          </div>
        </div>
       </div>
    </div>
  );
}

export default App;





