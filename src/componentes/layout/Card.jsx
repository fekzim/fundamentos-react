import React from "react";
import './Card.css';

export default  function Card (props){

    const   Cardstyle = {
        backgroundColor:props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return(
        <div className="Card" style={ Cardstyle }>
            <div className="title"> { props.title }</div>
            <div className="content"> {props.children}</div>
        </div>
    )

}