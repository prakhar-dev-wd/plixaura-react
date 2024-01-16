import React from "react";
import "./App.css"

function Cost(props) {
    return(
        <div className="prod-cost">
        <p className="price">{props.text}</p>
        <span className="tax">incl. of all taxes</span>
        </div>
    )
}
export default Cost;