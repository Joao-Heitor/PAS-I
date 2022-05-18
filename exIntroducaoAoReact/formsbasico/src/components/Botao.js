import "./Botao.css"
export function Botao(props) {
    return ( 
        <button onClick = {() => alert(props.message)}> { props.texto } 
        </button>
    )
}