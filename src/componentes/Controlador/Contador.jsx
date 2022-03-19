import React, {useState} from "react";


 export default function Contabilizar(props){
    let n = props.numeroInicial;

    const [value,setValue] = useState(n || 20)

    function inc(){
        n = value+1;
        setValue(n);
    }

    function dec(){
        n = value-1;
        setValue(n);
    }

    return(
        <div>
            <h2>Contador</h2>
            <p>Numero inicial: {value}</p>
            <button onClick={inc}>+++</button>
            <button onClick={dec}>---</button>
        </div>
    )
 }