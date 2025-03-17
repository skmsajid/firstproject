import {useState} from "react";
import {genTicket,sum} from "./genTicket";
export default function Lottery(){
    const [list,setList]=useState(genTicket(3));
    let iswinned=sum(list)===15;

    let buyTicket=()=>{
        setList(genTicket(3));
    }
    // useEffect(() => {
    //     if (list[0] + list[1] + list[2] === 15) {
    //         alert("You have won the LOTTERY!!!");
    //     }
    // }, [list]);
    return(
        <div>
            <h3>Lottery Game</h3>
            <div>Ticket Code: 
                <span>{list[0]}</span>
                <span>{list[1]}</span>
                <span>{list[2]}</span>
            </div>
            <button onClick={buyTicket}>Buy Ticket</button>
            {iswinned && (<h1>You have won the LOTTERY</h1>)}

        </div>
    );
}