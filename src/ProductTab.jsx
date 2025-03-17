import Product from "./Product.jsx";
function ProductTab(){
    return(
        <div>
            <Product title="Iphone" price={20000}/>
            <Product title="Android" price={10000}/>
            <Product title="Nokia" price={30000}/>
        </div>
    );
}
export default ProductTab;
