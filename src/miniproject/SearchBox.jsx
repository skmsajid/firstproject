import TextField  from "@mui/material/TextField";
import  Button  from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let[error,setError]=useState(false);
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="c26b8fb0fc138538e1de8e69a2568754";
    let getWheatherInfo= async ()=>{
        try{
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse= await response.json();
        console.log(jsonResponse);
        let result={
                city:city,
                feelslike:jsonResponse.main.feels_like,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                weather:jsonResponse.weather[0].description
                  }
                 return result;
         }
            catch(e){
                throw e;
            }
        }
    
    let HandleInput=(event)=>{
        setCity(event.target.value)
    }
    let HandleSubmit=async (event)=>{
        try{
        console.log(city);
        event.preventDefault();
        setCity("");
        let newInfo= await getWheatherInfo();
        updateInfo(newInfo,true);
        setError(false);
        }catch (e) {
            console.error(e);
            setError(true);
        }        
    }
    return (
        <div className="SearchBox" >
            <form  onSubmit={HandleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={HandleInput}  required/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Search</Button>
            
            </form>{ error &&
            <div  style={{color:"tomato"}}>
            No Such Place Exists.
            </div>
            }
        </div>
    );
}