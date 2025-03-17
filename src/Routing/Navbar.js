import { Link, useLocation } from "react-router-dom";
export default function Navbar(){
  let currentLocation=useLocation();
  let pathsNotToAppear=["/nav"];

  if(pathsNotToAppear.includes(currentLocation.pathname) ){
    return null;
  }
    return(
        <nav>
        <div style={{display:"flex",justifyContent:"flex-end",backgroundColor:"skyblue"}}>
          <p ><Link to="/">Home</Link></p>
          <p style={{marginLeft:"10px"}}><Link to="/about">About</Link></p>
          <p style={{marginLeft:"10px",marginRight:"50px"}}><Link to="/contact">Contact</Link></p>
        </div>
      </nav>
    );
}