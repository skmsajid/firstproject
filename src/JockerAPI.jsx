import { useEffect, useState } from "react";
export default function JockerAPI(){
    const URL="https://official-joke-api.appspot.com/random_joke";
    const getNewJoke=async()=>{
        let response= await fetch(URL);
        let JsonResponse= await response.json();
        console.log(JsonResponse);
        setJoke(JsonResponse);
    }
    let [joke,setJoke]=useState({getNewJoke});
    useEffect( ()=>{ 
        async function CallMe(){
        let response= await fetch(URL);
        let JsonResponse= await response.json();
        console.log(JsonResponse);
        setJoke(JsonResponse);
      }
      CallMe(); 
    },[]);
    return(
        <div>
            <h3>Joker!</h3>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button onClick={getNewJoke}>Get Joke</button>
        </div>
    );
}