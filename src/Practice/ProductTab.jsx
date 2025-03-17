import Product  from "./Product.jsx";
export default  function ProductTab(){
   let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"

    };
    return(
        <div style={styles}>
            
        <Product name="Logitech Master" idx="0"/>
        <Product name="Apple Pencil " idx="1"/>
        <Product name="Zebra Trans" idx="2"/>
        <Product name="Portonics Toad 23" idx="3"/>
        </div>
    );
}