import "../Styles/Boards.scss"
import { React, useState }from 'react'
import { DragDropContext } from "react-beautiful-dnd"
import list from "../list";

export default function Boards() {

  const [title, setTitle] = useState("To Do");
  const [content, setContent] = useState("Eat Breakfast");
  const [data, setData] = useState( {
    title: "To do",
    content: "Eat lunch"
  })
  console.log(data);

  const formSubmit = (event) => {
    event.preventDefault();
  }


  return (
    <div className="Board">
      <form className="Form" onSubmit={formSubmit}>
        <div className="container">
          {list.map((data) => {
            return (
              <div className="Card">
                <h1 className="title" >{data.title}</h1>
                <p className="p">{data.content}</p>
                <button className="button">+</button>
              </div>
            )
          })}

        </div>
      </form>
    </div>
  )
}
