import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"; 
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info,isdata}){
    let HOT_URL="hot.jpg";
    let COLD_URL="cold.jpg";
    let RAIN_URL="rain.jpg";
    return(
        isdata && ( 
        <div className='InfoBox'>
             <div className='InfoContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 150 }}
                    image={
                        info.humidity > 80
                            ? RAIN_URL
                            : info.temp > 15
                            ? HOT_URL
                            : COLD_URL
                    }
                    title="Weather Image"
                />

            <CardContent className='card'>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}{info.humidity > 80
                        ? <ThunderstormIcon />  // Rainy
                        : info.temp > 15
                        ? <WbSunnyIcon />       // Hot
                        : <AcUnitIcon />}       

                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} className='content'>
                    <p>Temperature={info.temp}</p>
                    <p>Humidy={info.humidity}</p>
                    <p>Min Temp={info.tempMin}</p>
                    <p>Max Temp={info.tempMax}</p>
                    <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                </Typography>
            </CardContent>
            </Card>
        </div>
    </div>
        )
    );
}