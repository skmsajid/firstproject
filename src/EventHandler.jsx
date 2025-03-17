function Eh(){
    alert("You clicked Me!!!");
}
let st={color:" #dcb95b"};
export default function EventHandler({name}){
    return(
        <div>
            <h2 > Hello <span style={st}>{name}</span></h2>
            <p>To display a message</p>
            <button onClick={Eh}>Click Me!</button>

        </div>
    );
}