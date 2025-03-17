// import ProductTab from "./ProductTab.jsx";
// import Activity from "./Activity.jsx";
// function App() {
//   return( 
//     <div>    
//       <ProductTab/>
//       <Activity name="SHAIK MAHAMMAD SAJID" textColor="green" />
//       <Activity name="SHAIK NAGUR BASHA" textColor="tomato" />
//     </div>
// );
// }
//for Amazon product problem of folder Practice
// import ProductTab from "./Practice/ProductTab";
// function App() {
//   let styles={textAlign:"center"};
//   return( 
//     <div>
//       <h4 style={styles}>BlockBuster Deals I Shop Now!</h4>
//       <ProductTab/>
//     </div>
// ); 
// }
// export default App;

// import { Button } from "@mui/material";
// import { useState } from "react";

//EventHandler
// import EventHandler from "./EventHandler";
// function App(){
//   return(
//     <EventHandler name="Sajid"/>
//   );
// }
// export default App;

//State
// import State from "./State.jsx";
// function App(){
//   return(
//     <State/>
//   );
// }
// export default App;

//LikeButton
// import LikeButton from "./LikeButton.jsx";
// function App(){
//   return(
//     <div>
//       <LikeButton/>
//     </div>
//   );
// }
// export default App;

//Todo List 
// import Todo from "./Todo.jsx";
// function App(){
//   return(
//     <div>
//       <Todo/>
//     </div>
//   ); 
// }
// export default App;

//Ludo Board for state and objects
// import Ludoboard from "./LudoboardUsindObject.jsx";
// function App(){
//   return(
//     <>
    
//     <div style={{display:"flex"}}>
//     <h1> LudoBoard </h1>
//     <Ludoboard/>
    
//     </div>
//     </>
    
//   );
// }
// export default App;



//Routing 
// import React from "react";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Home from "./Routing/Home";
// import About from "./Routing/About";
// import Contact from "./Routing/Contact";
// import Navbar from "./Routing/Navbar";
// import Navigate from "./Routing/Navigate";
// const App = () => {
//   return (
//     <>     

//     <Router>
//        <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/nav" element={<Navigate />} />

//       </Routes>
//     </Router></>
//   );
// };

// export default App;


// //Lottery Game for random num gen 
// import Lottery from "./Lottery";
// function App(){
//   return(
//     <div style={{display:'flex',justifyContent:"center"}}>
//       <Lottery/>       
//     </div>
//   ); 
// }
// export default App;


//Fuctions as props
// import Ticket from "./Routing/LotteryGame/Ticket";
// const App=()=>{
//   let isWinned=(ticket)=>{
//     return ticket[0]===0 ;
//   }
//   return(
//     <Ticket n={3} isWinned={isWinned} />
//   );
// }
// export default App;

//forms 
// import { useState } from "react";
// const App=()=>{
//   let [inputVal,setInputVal]=useState("Sajid");
//   const [display, setV] = useState("");  return(
//     <>
//     <div style={{margin:"3px",display:"flex",justifyContent:"space-around",width:"270px"}}>
//     <label htmlFor="name">Name</label>
//     <input type="text" id="name" style={{backgroundColor:"rgb(55, 63, 72)",color:"white",width:"200px",height:"29px" ,border:"0px"}} value={inputVal} onChange={(e)=>setInputVal(e.target.value)}/>
//     <input  style={{backgroundColor:"rgb(55, 63, 72)",color:"white",height:"31px"}}type="button" value={"Button"} onClick={()=>setV(inputVal)}></input>
//     </div>
//     {display}
    
    
//     </>
//   );
// }
// export default App;
 

// Multiple inputs form
// import MultipleInputsObject from "./Form/MultipleInputsObject";
//  function App(){
//   return(
//     < MultipleInputsObject/>
//   );

//  } 
//  export default App;


//useEffect()
// import UseEffect from "./UseEffect";
// function App(){
//   return(
//     <UseEffect/>
//   );
// }
// // export default App;

//useEffect() with API data Fetch using JockerAPI
// import JockerAPI from "./JockerAPI";
// function App(){
//   return(
//     <JockerAPI/>
//   );
// }
// export default App;

    // Mini Project called Weather App by search name
import WeatherApp from "./miniproject/WeatherApp";
function App(){
  return(
    <div style={{background:"linear-gradient(to top,#ffd952,#bdc4de)",width:"100vw",height:"99vh",marginTop:'-20px',marginBottom:"-50px"}}>
    <WeatherApp/>
    </div>
  );
}
export default App;