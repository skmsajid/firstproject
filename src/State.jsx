import { useState } from "react";

export default  function State(){
    let [count,setCount]=useState(0);
    function InCount(){
        setCount(count+1);
    }
  return(
    <>
        <p>Count:{count}</p>
        <button onClick={InCount}>Increase Me!!!</button>
    </>
  );
}
