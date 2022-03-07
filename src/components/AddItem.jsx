import "./AddItem.css";

function AddItem() {
  function checkEnter(event) {
    if (event.keyCode === 13) {
      document.getElementById("list-input").value = "";
    }
  }

  return (
    <div>
      <input
        id="list-input"
        className="input"
        type="text"
        onKeyUp={checkEnter}
      />
    </div>
  );
}

export default AddItem;
