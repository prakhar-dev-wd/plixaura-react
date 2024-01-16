import React from "react";
import  "./App.css"

function Tags(props){
    return(
        <div>
            <p className="tags" style={{backgroundColor: props.color}}>{props.text}</p>
        </div>
    )
}
export default Tags;