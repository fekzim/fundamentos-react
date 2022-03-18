import React from "react";

export default function IndiretaFilho(props){
    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function (e){
                    props.quandoClicar(`Felipe`, 53, true)
                }
            }> Fornencer Informações </button>
        </div>
    )
}