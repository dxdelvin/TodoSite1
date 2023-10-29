import React, {useState} from "react";

export default function Task(props){



    return(
        <li onClick={(()=>{props.deleteCheck(props.id)})}>{props.taskadd}</li>
    )
} 