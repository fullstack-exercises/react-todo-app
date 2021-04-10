import "./style.css";

const ToDoItem = (props) => {
  return (
    <form>
      <input type="checkbox" name="plant" checked={props.item.completed} />
      <label>{props.item.text}</label>
    </form>
  );
};

export default ToDoItem;
