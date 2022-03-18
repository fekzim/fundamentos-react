import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";
export default function IndiretaPai(props){

    let [nome,setNome] = useState(`?`)
    let [idade,setIdade] = useState(0)
    let [trabalho,setTrabalho] = useState(false)
    
    function Information(nome,idade,trabalho){
        setNome(nome);
        setIdade(idade);
        setTrabalho(trabalho);
    }
    return(        
        <div>
            <div>
                <span>{nome}</span>
                <span>{idade}</span>
                <span>{trabalho ? `Verdadeiro` : `Falso`}</span>
            </div>
            <IndiretaFilho quandoClicar={Information}></IndiretaFilho>
        </div>
    )
}