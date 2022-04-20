import "../Styles/Boards.scss";
import { React, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Boards() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "To do",
      content: [
        "Fix bugs in program",
        "Make site reactive",
        "No idea",
        "Make tea",
      ],
    },
    {
      id: 2,
      title: "In Progress",
      content: ["Fix coffee maker", "Finish planting garden"],
    },
    {
      id: 3,
      title: "Finished",
      content: ["Eat Breakfast", "Fix bike"],
    },
    { id: 4, title: "Ideas", content: ["Find new library"] },
  ]);

  console.log(data);

  const formSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Board">
      <form className="Form" onSubmit={formSubmit}>
        <div className="container">
          {data.map((data) => {
            return (
              <div className="Card">
                <h1 className="title">{data.title}</h1>
                {data.content.map((content) => {
                  return <p className="p">{content}</p>;
                })}
                <button className="button">+</button>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}
