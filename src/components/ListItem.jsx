import "./ListItem.css";

function ListItem(props) {
  return (
    <div className={"list-item " + props.class}>
      <input
        defaultChecked={props.complete}
        className="checkbox"
        type="checkbox"
        name=""
        id=""
      />
      <h3>{props.title}</h3>
      <button className="delete">X</button>
    </div>
  );
}

export default ListItem;
