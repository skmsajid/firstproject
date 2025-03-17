export default function Activity({name,textColor}){
    let x={color:textColor};
    return (
        <div>
            <h1 style={x}>{name}</h1>
        </div>
    );
}