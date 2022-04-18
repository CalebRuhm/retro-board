import "../Styles/Boards.scss"
import { React, useState }from 'react'
import { DragDropContext } from "react-beautiful-dnd"

export default function Boards() {

  const [title, setTitle] = useState("Click Me");
  const [input, setInput] = useState("hidden");

  const changeTitle = () => {
    if (input === "hidden") {
      setInput("text")
    }
    else {
      setInput("hidden")
    }
  }

  return (
    <div className="Board">
      <div className="Container">
          <form className="Form">
            <label onClick={changeTitle}>{title}</label>
            <input placeholder = "Title" type={input} onChange={((e) => setTitle(e.target.value))}></input>
            <button>Add</button>
          </form>
      </div>
    </div>
  )
}
