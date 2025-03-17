import TextField from '@mui/material/TextField';
import { useState } from "react";
export default  function Todo(){
    let [todolist,setTodolist]=useState([]);
    let [inputtodo,setInputtodo]=useState("");
    let Addtask=()=>{
        if(inputtodo!==""){
        setTodolist([...todolist,inputtodo]);
        setInputtodo(""); 
        }
    }
    let InputVal=(event)=>{ 
        setInputtodo(event.target.value);
    }
    let UpdateAll=()=>{
        setTodolist( todolist.map((item)=>{
            return item.toUpperCase();
        }));
    }
    let UpdateOne=(index)=>{
        setTodolist( todolist.map((item)=>{
            if(todolist[index]===item){
                return item.toUpperCase();
            }else{
                return item;
            }
        }));
    }
    let DeleteElement=(index)=>{
        setTodolist(todolist.filter((_,i)=>i!==index))
    }
   
    return (
        <div style={{margin:"50px",width:"500px"}}>
        <TextField id="outlined-basic" label="Enter the Task" value={inputtodo} onChange={InputVal} variant="outlined" />
        <br/>
        <button onClick={Addtask} style={{marginTop:"10px",border:"2px solid black",borderRadius:"6px",width:"120px",height:"25px",backgroundColor:"#59c39f"}}>ADD TASK</button>
        <br/>
        <br/>
        <h2>TASKS</h2>
        <hr></hr>
        <div>
           <table cellPadding={4} style={{backgroundColor:"rgb(0, 0, 0)",border:"4px solid skyblue",borderRadius:"7px"}} cellspacing={10}> { 
                todolist.map((task,index)=>{
                    console.log(todolist);
                    return (
                        <tr>
                            <td key={index} style={{fontFamily:"sans-serif",fontSize:"17px",color:"white",backgroundColor:"rgb(0, 0, 0)",border:"4px solid skyblue",borderRadius:"8px"}}>
                         {task}
                            </td>

                            <td>
                         <button onClick={()=>DeleteElement(index)} style={{border:"4px solid skyblue",borderRadius:"6px",width:"100px",height:"35px",backgroundColor:"rgb(228, 99, 68)"}}>DELETE</button>
                            </td>
                         <td>
                         <button onClick={()=>UpdateOne(index)} style={{border:"4px solid skyblue",borderRadius:"6px",width:"100px",height:"35px",backgroundColor:"rgb(255, 214, 101)"}}>UPPERCASE</button>   
                            </td>
                        </tr>
                    );
                })
            }
            </table>
        </div>
        <br/>
        {todolist.length > 0 && (<button onClick={UpdateAll} style={{border:"1px solid black",borderRadius:"6px",width:"120px",height:"25px",backgroundColor:"rgb(0, 255, 0)"}}>UPPERCASE All</button>)}


        </div>
    );
}