import "./App.css";
import List from "./components/List";

function App() {
  function changeColor() {
    let app = document.getElementById("main");
    if (app.classList.contains("dark")) {
      app.classList.replace("dark", "light");
    } else {
      app.classList.replace("light", "dark");
    }
  }

  return (
    <div id="main" className="App dark">
      <div className="header">
        <h1>Todo</h1>
        <button id="cssChange" onClick={changeColor}></button>
      </div>
      <List />
      <p>Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
