import React, {useState} from "react";
import Task from "./Task";
import InputArea from "./InputArea";



export default function App(){
    const [text, setText] = useState("")
    const [items, setItems]= useState([])



    function recordChange(event){
        const value = event.target.value
        setText(value)
    }

    function handleChange(){
        setItems(items.concat(text))
        setText("")
    }

    function deleteCheck(id){
        setItems((prev)=>{
            return prev.filter((item, index)=>{
                return  index !== id
            });
        })
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
          handleChange();
        }
      }
    
    return (<div>
    <div className="center-flex">
        <div className="center-rectangle">
            <h1 className="heading">To-Do List</h1>
            <InputArea text={text} recordChange={recordChange} handleChange={handleChange} handleKeyPress={handleKeyPress}/>
            <div className="todo-items">
                <ul>
                {items.map((item, index)=>{
                    return <Task key={index} id={index} taskadd={item} deleteCheck={deleteCheck}/>
                })}
                </ul>
            </div>
        </div>
    </div>
    </div>);
}

