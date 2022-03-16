import React from "react";

export default  function Aleatorio(props){
    const aleatorio = parseInt(Math.random() * ( props.max -props.min)) 
    return(
        <div> 
            <h2> Números aleatorios </h2>
            <h4><strong>Valor Minimo:</strong> {props.min}</h4>
            <h4><strong>Valor Maximo:</strong> {props.max}</h4>
            <h4><strong>Valor Selecionado:</strong> {aleatorio}</h4>
        </div>
    )
}