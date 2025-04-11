import TextField from '@mui/material/TextField'
import './SearchBox.css'
import Button from '@mui/material/Button';
import { use, useState } from 'react';
import Alert from '@mui/material/Alert';



export default function SearchBox({updateInfo}){

    const [city,setCity] = useState("")
    const [err,setErr] = useState(false)

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "c9fcbd73f93fa579ace59ac966ac65b8"

    let getWeather = async() =>{
      try{
        let result =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResult = await result.json()
        let weatherData = {
            city: city,
            feelsLike : jsonResult.main.feels_like,
            temp : jsonResult.main.temp,
            maxTemp : jsonResult.main.temp_max,
            minTemp : jsonResult.main.temp_min,
            weather : jsonResult.weather[0].main,
            humidity : jsonResult.main.humidity,
        }
        console.log(weatherData)
        return weatherData;
      }catch(e){
        throw e;
      }
    }

    let handleOnChange = (event) =>{
        setCity(event.target.value)
       
    }

    let handleSubmit = async(event) =>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let result = await getWeather();
        updateInfo(result);
        setErr(false);
        }catch(err){
            setErr(true)
        }
    }
    return (
    <div className='searchbox'>
        <h3>Search for the Weather</h3>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" value={city} variant="outlined" onChange={handleOnChange} />
            <br /><br />
            <Button variant="contained" type='submit'>Search</Button>
        </form>
      
        {err && <Alert className='alert' severity="error">No Such City in Our API</Alert>}
    </div>
    
    )
}