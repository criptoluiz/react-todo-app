import React, { useEffect, useState } from "react";
import "./List.css";
import ListItem from "./ListItem";

let items = [
  {
    title: "Lavar a louça",
    complete: true,
    class: "complete",
  },
  {
    title: "Alimentar o gato",
    complete: false,
    class: "incomplete",
  },
  {
    title: "Levar o lixo p/ rua",
    complete: false,
    class: "incomplete",
  },
  {
    title: "Comprar comida",
    complete: true,
    class: "complete",
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

  function showAll() {
    let i = document.getElementsByClassName("list-item");
    for (let a = 0; a < i.length; a++) {
      if (i[a].classList.contains("hidden")) {
        i[a].classList.remove("hidden");
      }
    }
  }

  function showActive() {
    let i = document.getElementsByClassName("list-item");

    for (let a = 0; a < i.length; a++) {
      i[a].classList.remove("hidden");
      if (i[a].classList.contains("complete")) {
        i[a].classList.add("hidden");
      }
    }
  }

  function showCompleted() {
    let i = document.getElementsByClassName("list-item");
    for (let a = 0; a < i.length; a++) {
      i[a].classList.remove("hidden");
      if (i[a].classList.contains("incomplete")) {
        i[a].classList.add("hidden");
      }
    }
  }

  function checkEnter(event) {
    if (event.keyCode === 13) {
      const li = document.getElementById("list-input");
      const list = document.getElementById("list");
      li.value = "";
    }
  }

  return (
    <div className="list">
      <div>
        <input
          id="list-input"
          className="input"
          type="text"
          onKeyUp={checkEnter}
        />
      </div>

      <div id="list" className="list-container">
        {items.map((i) => (
          <ListItem title={i.title} complete={i.complete} class={i.class} />
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
