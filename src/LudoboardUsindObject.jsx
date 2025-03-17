import { useState } from "react";

export default function Ludoboard(){
    let [moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0});
    let upadateBlue=(color)=>{
        setMoves({...moves,[color]:moves[color]+1});
    };
    // we can use this below also for multiple times to get all but to use argument we to follow the above
    // let upadateBlue=()=>{
    //     setMoves({...moves,blue:moves.blue+1});
    // };
    return(
        <div style={{textAlign:"center",border:"2px solid black",width:"150px",marginLeft:"200px",margin:"50px",padding:"5px",backgroundColor:"gray",color:"whitesmoke"}}>
            <h3>Game Begins</h3>
            <div>
                <p>Blue Move={moves.blue}</p>
                <button onClick={()=>upadateBlue("blue")} style={{backgroundColor:"blue",border:"solid 1px blue",borderRadius:"3px"}}>+1</button>
                <p>Yellow Move={moves.yellow}</p>
                <button onClick={()=>upadateBlue("yellow")} style={{backgroundColor:"yellow",border:"solid 1px yellow",borderRadius:"3px"}}>+1</button>
                <p>Green Move={moves.green}</p>
                <button onClick={()=>upadateBlue("green")} style={{backgroundColor:"green",border:"solid 1px green",borderRadius:"3px"}}>+1</button>
                <p>Red  Move={moves.red}</p>
                <button onClick={()=>upadateBlue("red")} style={{backgroundColor:"red",border:"solid 1px red",borderRadius:"3px"}}>+1</button>
            </div>
        </div>
    );
}
