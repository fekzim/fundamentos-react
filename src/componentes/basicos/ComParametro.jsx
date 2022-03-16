import React from "react"

export default function ComParametro(props){
    const estado = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return(
        <div>
            <h1>{props.titulo}</h1>
            <h3>{props.subtitulo}</h3>
            <p>{props.pessoa}</p>
            <p>{props.nota}</p>
            <p><strong>{ estado }</strong></p>
        </div>
    )
}