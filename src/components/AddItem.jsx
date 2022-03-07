import "./AddItem.css";

function AddItem() {
  document
    .getElementById("list-input")
    .addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        this.value = "";
      }
    });

  return (
    <div>
      <input id="list-input" className="input" type="text" />
    </div>
  );
}

export default AddItem;
