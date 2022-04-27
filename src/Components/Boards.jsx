import "../Styles/Boards.scss";
import { React, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export default function Boards() {
  const [input, setInput] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(null);
  const [unclicked, setUnclicked] = useState(null);
  const [data, setData] = useState([
    {
      title: "To do",
      newTitle: "",
      content: ["Pretend to work on ticket #6380", "Shave", "Get Jeff Fired"],
      newContent: "",
    },
    {
      title: "In Progress",
      content: [
        "Bug manager to fix coffee maker!",
        "Develop ploy to get Jeff fired"
      ],
      newContent: "",
    },
    {
      title: "Finished",
      content: [
        "Learn how to code haphazardly so my boss doesn't fire me and fires Jeff instead",
        "Eat lunch",
      ],
      newContent: "",
    },
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
    setData([...result]);
  };

  const editCardTitle = (idx, e) => {
    data[idx].newTitle = e.target.value;
    setData([...data]);
  };

  const setCardTitle = (idx) => {
    data[idx].title = data[idx].newTitle;
    data[idx].newTitle = "";
    setData([...data]);
  };

  const inputChange = () => {
    setInput(!input);
    setHidden(!hidden);
  };

  const dragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(data);
    const [reorderedItem] = items[clicked].content.splice(result.source.index, 1);
    items[unclicked].content.splice(result.destination.index, 0, reorderedItem);
    setData(items)
  }

  return (
    <div className="Board">
      <form className="Form" onSubmit={formSubmit}>
        <DragDropContext onDragEnd={dragEnd}
        >
          <Droppable droppableId="cards">
            {(provided) => {
              return (
                <div
                  className="container"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {data.map((newData, idx) => {
                    return (
                      <div className="Card" onMouseDown={() => setClicked(idx)} onMouseUp={() => setUnclicked(idx)}>
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
                        <div className="titleEdit">
                          <input
                            className="titleInput"
                            type={input ? "text" : "hidden"}
                            placeholder="Change Title"
                            value={data[idx].newTitle}
                            onChange={(e) => editCardTitle(idx, e)}
                          ></input>
                          {hidden && (
                            <button
                              type="submit"
                              onClick={() => setCardTitle(idx)}
                            >
                              ✓
                            </button>
                          )}
                        </div>
                        {newData.content.map((newContent, contentIdx) => {
                          return (
                            <Draggable
                              key={contentIdx}
                              index={contentIdx}
                              draggableId={newContent}
                            >
                              {(provided) => {
                                return (
                                  <div
                                    className="row"
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                  >
                                    <button
                                      onClick={() =>
                                        deleteContent(idx, contentIdx)
                                      }
                                    >
                                      ✖
                                    </button>
                                    <p>{newContent}</p>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}

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
              );
            }}
          </Droppable>
        </DragDropContext>
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
