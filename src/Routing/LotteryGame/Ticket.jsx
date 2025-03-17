import Helper from "./Helper";
import { useState } from "react";
import TicketNum from "./TicketNum";
export default function Ticket({n,isWinned}){
    let [ticket,setTicket]=useState(Helper(n));

    function BuyTicket(){
        setTicket(Helper(n))
    }
    return(
        <div 
        style={{
             background: "linear-gradient(to top left, #a3bae2, #e06bf6)",
             display: "flex",
            justifyContent: "center",  /* Centers horizontally */
            alignItems: "center",     /* Centers vertically */
            height: "100vh"          /* Full height of viewport */
            }}>        {
           ticket.map((num,idx)=>(
             <TicketNum num={num} key={idx}/>
           ))
    
        }     
        <button onClick={BuyTicket}>Click Me</button>
        
        {
            isWinned(ticket)&& (<h1>Congratulation,You won The Lottery</h1>)
        }
        </div>
    );
}