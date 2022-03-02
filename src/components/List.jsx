import React, { useEffect, useState } from "react";
import "./List.css";
import ListItem from "./ListItem";
import AddItem from "./AddItem";

let items = [
  {
    title: "Lavar a louça",
    complete: true,
  },
  {
    title: "Alimentar o gato",
    complete: false,
  },
  {
    title: "Levar o lixo p/ rua",
    complete: false,
  },
  {
    title: "Comprar comida",
    complete: true,
  },
];

function List() {
  let [count, setCount] = useState([]);
  useEffect(() => {
    let number = 0;
    for (let a = 0; a < items.length; a++) {
      if (items[a].complete === false) {
        number++;
      }
    }
    setCount(number);
  }, []);

  function showAll() {}

  function showActive() {}

  function showCompleted() {}

  return (
    <div className="list">
      <AddItem />

      <div className="list-container">
        {items.map((i) => (
          <ListItem title={i.title} complete={i.complete} />
        ))}

        <div className="footer">
          <p className="i-left">
            <span>{count}</span> items left
          </p>
          <div className="i-selection">
            <a onClick={showAll}>All</a>
            <a onClick={showActive}>Active</a>
            <a onClick={showCompleted}>Completed</a>
          </div>

          <a className="cls-completed">Clear Completed</a>
        </div>
      </div>
    </div>
  );
}

export default List;
