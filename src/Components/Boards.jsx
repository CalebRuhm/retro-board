import "../Styles/Boards.scss";
import { React, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Boards() {
  const [content, setContent] = useState("");

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
      content: ["Eat breakfast", "Fix bike"],
    },
    { id: 4, title: "Ideas", content: ["Find new library"] },
  ]);

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const addContent = (e, idx) => {
    setContent(e);
    console.log(content);
    console.log(data[idx].content);
  };

  const addCard = (card) => {
    console.log(card);
    // setData([
    // ...data,[ card]
    // ])
  };

  const card = {
    id: 5,
    title: "what",
    content: ["idk", "help pls"],
  };

  const deleteContent = () => {};

  return (
    <div className="Board">
      <form className="Form" onSubmit={formSubmit}>
        <div className="container">
          {data.map((data, idx) => {
            return (
              <div className="Card">
                <h1 className="title">{data.title}</h1>
                {data.content.map((content) => {
                  return (
                    <div className="row">
                      <button onClick={deleteContent}>✖</button>
                      <p>{content}</p>
                    </div>
                  );
                })}
                <div className="add">
                  <input
                    type="text"
                    placeholder="Add item"
                    value={content}
                    onChange={(e) => addContent(e.target.value, idx)}
                  />
                  <button type="submit" className="button">
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="newCard">
          <p>New Card</p>
          <button type="submit" onClick={addCard(card)}>
            +
          </button>
        </div>
      </form>
    </div>
  );
}
