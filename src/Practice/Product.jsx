import Price from "./Price.jsx";
export default function Product({name,idx}){
    let dsc=["5 Programmable Buttons","Intuitive touch surface","Designed for Ipad Pro","Optical Orientation Panel"];
    let oldprices=[2442,1999,2333,3323];
    let newprices=[2333,1663,4999,3233];
    let styles={
        border:"2px solid black ",
        borderRadius:"14px",
        marginBottom:"15px",
        width:"150px",
        marginLeft:"5px",
        height:"132px",
        textAlign:"center",
    
    };
    let st={
    fontWeight:"bold"
    };
    return(
        <div style={styles}>
            <p style={st}>{name}</p>
            <p>{dsc[idx]}</p>
        <Price oldprice={oldprices[idx]} newprice={newprices[idx]} />
        </div>
    );
}