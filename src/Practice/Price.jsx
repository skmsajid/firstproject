export default function Price({oldprice,newprice}){
    let style={
        backgroundColor:"#dcb95b",
        borderBottomLeftRadius:"12px",
        borderBottomRightRadius:"12px",
    };
    let oldp={
        textDecorationLine:"line-through"
    };
    let newp={
        fontWeight:"bold"
    };
    return(
        <div style={style}>
        <span style={oldp}>{oldprice}</span>
        &nbsp; &nbsp;
        <span style={newp}>{newprice}</span>
        </div>
    );
    
}