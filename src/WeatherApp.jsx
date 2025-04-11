import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import "./WeatherApp.css"

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike : 33.4,
        temp : 34,
        maxTemp : 35,
        minTemp : 32,
        weather : "haze",
        humidity :19,
    })

    let updateInfo = (weatherData) =>{
        setWeatherInfo(weatherData)
    }

    return(
        <div className="weatherApp">
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox weatherInfo={weatherInfo}/>
        </div>
    )
}