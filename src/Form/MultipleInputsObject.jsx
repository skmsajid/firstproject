import { useState } from "react";
export default function MultipleInputsObject(){
    let [formData,setFormData]=useState({
        fullName:"",
        userName:"",
        password:""
    });
    let [displayData,setDisplayData]=useState([])
    let HandleInputChange=(event)=>{
        setFormData({...formData,[event.target.name]:event.target.value});
    }
    let[isData,setIsData]=useState(false);
    let HandleSubmit=(event)=>{
        event.preventDefault();
        setDisplayData([formData.fullName,formData.userName,formData.password]);
        setIsData(true);
        setFormData({
            fullName:"",
            userName:"",
            password:""
        });
    }
    return(
        <div style={{margin:"30px",backgroundColor:"rgb(157, 167, 177)",width:"400px"}}>
            <form action="" onSubmit={HandleSubmit}>
            <label htmlFor="fullName">FullName:</label>
            <input type="text"  name="fullName" id="fullName" value={formData.fullName} onChange={HandleInputChange}/>
            <br/><br/>
            <label htmlFor="userName">UserName:</label>
            <input type="text" name="userName" id="userName" value={formData.userName} onChange={HandleInputChange}/>
            <br/><br/>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password"value={formData.password} onChange={HandleInputChange}/>
            <br/><br/>
            <center>
            <button style={{marginRight:"100px"}}>Submit</button>
            </center>
            </form>
            { isData && ( <>
            <h3>Entered Data:</h3>
            
                <p><strong>Full Name:</strong> {displayData[0]}</p>
                <p><strong>User Name:</strong> {displayData[1]}</p>
                <p><strong>Password:</strong> {displayData[2]}</p> 
                </>)
            }
                </div>
    );
}