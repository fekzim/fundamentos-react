import React from "react";
import nomes from '../../data/Nomes'
export default function ListaNomes(props){

    const lis = nomes.map(nome => {
        return (<li key={nome.id}>
            {nome.id}) {nome.nome} = {nome.nota}
        </li>)
    })
    return(
        <div>
            <ul>
                {lis}
            </ul>
        </div>
    )
}