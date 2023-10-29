import React from "react";

export default function InputArea(props){

    
    return(
        <div>
        <input onChange={props.recordChange} onKeyDown={props.handleKeyPress} value={props.text} type="text" name="tasktext"></input>
        <button onTouch={props.handleChange} onClick={props.handleChange} id="add">ADD</button>
    </div>
    )
}