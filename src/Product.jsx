import "./Product.css";
function Product ({title,price,type="Cost"}){
        let x=price>20000;
        let style={backgroundColor: x ?"skyblue":""};
    
    return (   
    <div className="Product" style={style}>
        <h1>{title}</h1>
        <p>{type}:{price}</p>
        { x? <p>Discount of 5%</p>: null}
    </div>
    );
}
export default Product;