import { useState } from "react";
export default function LikeButton(){
    let [isLiked,setIsLiked]=useState(false);
    let toggle=()=>{setIsLiked(!isLiked)};
    let likeStyle={color:"red"}
    let settingstyle={textAlign:"center"}
    return(
        <p style={settingstyle}>
            {isLiked?<i className="fa-solid fa-heart" onClick={toggle} style={likeStyle}></i>
            :<i className="fa-regular fa-heart" onClick={toggle} ></i>}
        </p>
    );
}


