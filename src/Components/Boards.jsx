import "../Styles/Boards.scss";
import { React, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

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
      newContent: "",
    },
    {
      id: 2,
      title: "In Progress",
      content: ["Fix coffee maker", "Finish planting garden"],
      newContent: "",
    },
    {
      id: 3,
      title: "Finished",
      content: ["Eat breakfast", "Fix bike"],
      newContent: "",
    },
    { id: 4, title: "Ideas", content: ["Find new library"], newContent: "" },
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

  const deleteContent = (idx,  contentIdx) => {
    data[idx].content = data[idx].content.filter((item, newContentIdx) =>(
      newContentIdx !== contentIdx
    ));
    setData([...data]);

  };

  const addCard = () => {};

  const deleteCard = () => {};

  const editCard = () => {};

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
                    onClick={editCard}
                  />
                  <h1 className="title">{newData.title}</h1>
                  <FontAwesomeIcon
                    className="trash"
                    icon={faTrash}
                    onClick={deleteCard}
                  />
                </div>
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
          <button type="submit" onClick={addCard}>
            +
          </button>
        </div>
      </form>
    </div>
  );
}
