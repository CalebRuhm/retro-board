import "../Styles/Boards.scss"
import { React, useState }from 'react'
import { DragDropContext } from "react-beautiful-dnd"

export default function Boards() {

  const [title, setTitle ] = useState("Todo");
  const [input, setInput] = useState("hidden");

  const changeTitle = () => {
    setInput("text");
  }

  return (
    <div className="Board">
      <div className="Container">
          <form className="Form">
            <label onClick={changeTitle}>{title}</label>
            <input type={input} onChange={((e) => setTitle(e.target.value))}></input>
          </form>
      </div>
    </div>
  )
}
