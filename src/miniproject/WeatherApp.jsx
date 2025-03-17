import InfoBox from "./InfoBox.jsx";
import SearchBox from "./SearchBox.jsx";
import { useState } from "react";
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({});
    let[isdata,setIsdata]=useState(false);

    let UpdateInfo=(newInfo,data)=>{
        setWeatherInfo(newInfo);
        setIsdata(data);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App By <i>Sajid</i></h1>
            <SearchBox updateInfo={UpdateInfo} /> 
            <InfoBox info={weatherInfo} isdata={isdata}/> 
        </div>
    );
}