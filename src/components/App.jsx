import React, {useState} from "react";
import Task from "./Task";



export default function App(){
    const [text, setText] = useState("")
    const [items, setItems]= useState([])

    function recordChange(event){
        const value = event.target.value
        setText(value)
    }

    function handleChange(){
        setItems(items.concat(<Task taskadd={text}/>))
        setText("")
    }
    
    return (<div>
    <div className="center-flex">
        <div className="center-rectangle">
            <h1 className="heading">To-Do List</h1>
            <div>
                <input onChange={recordChange} value={text} type="text" name="tasktext"></input>
                <button onClick={handleChange} id="add">ADD</button>
            </div>
            <div className="todo-items">
                <ul>
                {items}
                </ul>
            </div>
        </div>
    </div>
    </div>);
}

