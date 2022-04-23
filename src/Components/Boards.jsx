import "../Styles/Boards.scss";
import { React, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export default function Boards() {
  const [input, setInput] = useState(false);
  const [data, setData] = useState([
    {
      title: "To do",
      content: [
        "Fix bugs in program",
        "Make site reactive",
        "No idea",
        "Make tea",
      ],
      newContent: "",
    },
    {
      title: "In Progress",
      content: ["Fix coffee maker", "Finish planting garden"],
      newContent: "",
    },
    {
      title: "Finished",
      content: ["Eat breakfast", "Fix bike"],
      newContent: "",
    },
    { title: "Ideas", content: ["Find new library"], newContent: "" },
  ]);

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const addContent = (idx) => {
    data[idx].content.push(data[idx].newContent);
    data[idx].newContent = "";
    setData([...data]);
  };

  const changeContent = (e, idx) => {
    data[idx].newContent = e.target.value;
    setData([...data]);
  };

  const deleteContent = (idx, contentIdx) => {
    data[idx].content = data[idx].content.filter(
      (item, newContentIdx) => newContentIdx !== contentIdx
    );
    setData([...data]);
  };

  const addCard = (card) => {
    data.push(card);
    setData([...data]);
  };

  const card = {
    title: "New Card",
    content: ["Item 1", "Item 2", "Item 3"],
    newContent: "",
  };

  const deleteCard = (idx) => {
    const result = data.filter((card, cardIdx) => cardIdx !== idx);
    console.log(result);
    setData([...result]);
  };

  const editCardTitle = (idx) => {};

  const inputChange = () => {
    setInput(!input)
  }

  return (
    <div className="Board">
      <form className="Form" onSubmit={formSubmit}>
        <div className="container">
          {data.map((newData, idx) => {
            return (
              <div className="Card">
                <div className="titleContainer">
                  <FontAwesomeIcon
                    className="edit"
                    icon={faPenToSquare}
                    onClick={inputChange}
                  />
                  <h1 className="title">{newData.title}</h1>
                  <FontAwesomeIcon
                    className="trash"
                    icon={faTrash}
                    onClick={() => deleteCard(idx)}
                  />
                </div>
                <input
                  className="titleInput"
                  type={input ? "text" : "hidden"}
                  placeholder="Change Title"
                  value=""
                  onChange=""
                ></input>
                {newData.content.map((newContent, contentIdx) => {
                  return (
                    <div className="row">
                      <button onClick={() => deleteContent(idx, contentIdx)}>
                        ✖
                      </button>
                      <p>{newContent}</p>
                    </div>
                  );
                })}
                <div className="add">
                  <input
                    type="text"
                    placeholder="Add item"
                    value={newData.newContent}
                    onChange={(e) => changeContent(e, idx)}
                  />
                  <button
                    type="submit"
                    className="button"
                    onClick={() => addContent(idx)}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="newCard">
          <p>New Card</p>
          <button type="submit" onClick={() => addCard(card)}>
            +
          </button>
        </div>
      </form>
    </div>
  );
}
