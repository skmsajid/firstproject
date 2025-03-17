import { useNavigate } from "react-router-dom";
function  Contact() {
  const navigate=useNavigate();
  function goNav(){
    navigate("/nav")
  }
  return (
    <div>
  <h2>Contact Page</h2>
  <button onClick={goNav}>Navigate Me to new Page</button>
  </div>
  );

}

export default Contact;
