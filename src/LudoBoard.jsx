import { useState } from "react";

export default function Ludoboard(){
    let [bluemove,setBluemove]=useState(0);
    let [yellowmove,setYellowmove]=useState(0);
    let [greenmove,setGreenmove]=useState(0);
    let [redmove,setRedmove]=useState(0);



    return(
        <div style={{textAlign:"center",border:"2px solid black",width:"150px",marginLeft:"200px",margin:"50px",padding:"5px",backgroundColor:"gray",color:"whitesmoke"}}>
            <p><h3>Game Begins</h3></p>
            <div>
                <p>Blue Move={bluemove}</p>
                <button style={{backgroundColor:"blue",border:"solid 1px blue",borderRadius:"3px"}} onClick={()=>{setBluemove(bluemove+1)}}>+1</button>
                <p>Yellow Move={yellowmove}</p>
                <button style={{backgroundColor:"yellow",border:"solid 1px yellow",borderRadius:"3px"}} onClick={()=>{setYellowmove(yellowmove+1)}}>+1</button>
                <p>Green Move={greenmove}</p>
                <button style={{backgroundColor:"green",border:"solid 1px green",borderRadius:"3px"}} onClick={()=>{setGreenmove(greenmove+1)}}>+1</button>
                <p>Red  Move={redmove}</p>
                <button style={{backgroundColor:"red",border:"solid 1px red",borderRadius:"3px"}} onClick={()=>{setRedmove(redmove+1)}}>+1</button>
            </div>
        </div>
    );
}