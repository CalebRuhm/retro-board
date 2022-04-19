import "../Styles/Boards.scss"
import { React, useState }from 'react'
import { DragDropContext } from "react-beautiful-dnd"
import list from "../list";

export default function Boards() {

  const [title, setTitle] = useState("Click Me");
  const [input, setInput] = useState("hidden");

  console.log(list);

  return (
    <div className="Board">
      <form className="Form">
        <div className="container">
          {list.map((data) => {
            return (
              <div className="Card">
                <h1 className="title">{ data.title}</h1>
                <p className="p">{data.content}</p>
              </div>
            )
          })}

        </div>
      </form>
    </div>
  )
}
