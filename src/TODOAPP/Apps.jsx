import React, { useState } from "react";

const Apps = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    if (inputList == "") {
      alert("Enter Value");
      return;
    }

    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrelem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {/* <li> {inputList}</li> */}
            {Items.map((itemval, index) => {
              return (
                <>
                  <div className="todo_style">
                    <i
                      className="fa fa-times"
                      aria-hidden="true"
                      onClick={() => {
                        deleteItem(index);
                      }}
                      key={index}
                      id={index}
                      // onClick={deleteItem}
                    />
                    <li> {itemval}</li>
                  </div>
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Apps;
