import { useEffect, useState} from "react";
export default function UseEffect(){
    const [counter,setCounter]=useState(0);
    let IncC=()=>{
        setCounter(counter+1);
    }
    useEffect(
        ()=> console.log("this is useEffect")
    ,[counter]);
    return(
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={IncC}>+1</button>
        </div>
    );
} 