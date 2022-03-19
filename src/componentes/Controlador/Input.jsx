import React, {useState} from "react";

export default function Contador(){

    const [Valor,setValor] = useState(10)

    function Mudar(e){
        	setValor(e.target.value)
    }
    return(
        <div>
            <div>
                {Valor}
            </div>
            <input value={Valor} onChange={Mudar}/>
        </div>
    )
}