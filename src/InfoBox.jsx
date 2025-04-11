import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SpaIcon from '@mui/icons-material/Spa';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import "./Infobox.css"


export default function InfoBox({weatherInfo}){

    const HOT_URL = "https://plus.unsplash.com/premium_photo-1733306531071-087c077e1502?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VtbWVyJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ludGVyfGVufDB8fDB8fHww"
    const RAIN_URL = "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnl8ZW58MHx8MHx8fDA%3D"
    const Rain_Snow = "https://plus.unsplash.com/premium_photo-1726994887025-b91b0362b297?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmFpbiUyMGFuZCUyMHNub3d8ZW58MHx8MHx8fDA%3D"
    const Fall = "https://images.unsplash.com/photo-1508255139162-e1f7b7288ab7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFsbHxlbnwwfHwwfHx8MA%3D%3D"

    return(
        <div className='InfoBox'>
            <Card  elevation={8}  sx={{width:"100%", maxWidth: 345}}>      
        <CardMedia
          sx={{ height: 140 }}
          image={ weatherInfo.humidity > 70 
            ? (weatherInfo.temp < 10 ? Rain_Snow: RAIN_URL)
            : weatherInfo.humidity < 40 
              ? (weatherInfo.temp > 25 ? HOT_URL : HOT_URL)
              : (weatherInfo.temp < 10 ? COLD_URL : Fall)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {weatherInfo.city} &nbsp; <span >{ weatherInfo.humidity > 70 
            ? (weatherInfo.temp < 10 ? <CloudySnowingIcon/>: <ThunderstormIcon/>)
            : weatherInfo.humidity < 40 
              ? (weatherInfo.temp > 25 ? <SunnyIcon/> : <SunnyIcon/>)
              : (weatherInfo.temp < 10 ? <AcUnitIcon/> : <SpaIcon/>)}</span>
          </Typography>
          <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
            <p>Temperature = {weatherInfo.temp}&deg;C</p>
            <p>Feels Like {weatherInfo.feelsLike}</p>
            <p>Max Temp ={weatherInfo.maxTemp}</p>
            <p>Humidity = {weatherInfo.humidity}</p>
            <p>Min Temp = {weatherInfo.minTemp}</p>
            <p>Weather can be described as {weatherInfo.weather}</p>
          </Typography>
        </CardContent>
     
      </Card>
        </div>
        

    )
}