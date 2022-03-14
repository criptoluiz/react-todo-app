import React, { useEffect, useState } from "react";
import "./List.css";
import ListItem from "./ListItem";

let items = [
  {
    key: 0,
    title: "Lavar a louça",
    complete: true,
    class: "complete",
  },
  {
    key: 1,
    title: "Alimentar o gato",
    complete: false,
    class: "incomplete",
  },
  {
    key: 2,
    title: "Levar o lixo p/ rua",
    complete: false,
    class: "incomplete",
  },
  {
    key: 3,
    title: "Comprar comida",
    complete: true,
    class: "complete",
  },
];

let listItem = document.getElementsByClassName("list-item");

function List() {
  let [count, setCount] = useState(0);
  let [inputTitle, setInputTitle] = useState();
  let [list, setList] = useState(items);

  const addListItem = (item) => {
    console.log("list.jsx");
    setList([...list, item]);
    console.log(list);
  };

  useEffect(() => {
    let number = 0;
    for (let a = 0; a < listItem.length; a++) {
      if (listItem[a].classList.contains("complete") === false) {
        number++;
      }
    }
    setCount(number);
  }, [list]);

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

  function clearCompleted() {
    let i = document.querySelectorAll(".list-item");
    console.log(i)
    for (let a = 0; a < i.length; a++){
      i[a].classList.remove('hidden');
      if (i[a].classList.contains('complete')){
        console.log('removing ' +i[a])
        i[a].remove()
      }
    }
  }

  function changeStatus(item) {
    if (item.target.parentElement.classList.contains("incomplete")) {
      item.target.parentElement.classList.remove("incomplete");
      item.target.parentElement.classList.add("complete");
      count--;
      setCount(count);
    } else {
      item.target.parentElement.classList.add("incomplete");
      item.target.parentElement.classList.remove("complete");
      count++;
      setCount(count);
    }
    console.log(item.target.parentElement);
  }

  function addItem(event) {
    setInputTitle(event.target.value);
    if (event.keyCode === 13) {
      const li = document.getElementById("list-input");
      const list = document.getElementById("list");

      let newListItem = {
        title: inputTitle,
        complete: false,
        class: "incomplete",
      };
      addListItem(newListItem);
      li.value = "";
    }
  }

  function removeItem(event) {
    event.target.parentElement.remove()
    if(event.target.parentElement.classList.contains('incomplete')) {
      count--
      setCount(count)
    }
  }


  return (
    <div className="list">
      <div>
        <input
          id="list-input"
          className="input"
          type="text"
          onKeyUp={addItem}
        />
      </div>

      <div id="list" className="list-container">
        {list.map((i) => (
          <ListItem
            title={i.title}
            complete={i.complete}
            class={i.class}
            changeFunction={changeStatus}
            onDeleteItem={removeItem}
          />
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

          <a className="cls-completed" onClick={clearCompleted}>Clear Completed</a>
        </div>
      </div>
    </div>
  );
}

export default List;
