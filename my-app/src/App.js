import "./App.css";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import todosData from "./todosData";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    color: "grey",
  };

  const todoItems = todosData.map((item) => (
    <ToDoItem key="{item.id}" item={item} />
  ));

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return (
    <div className="App">
      <header className="Header">
        <h1 style={styles}>Good {timeOfDay}!</h1>
      </header>
      <main>{todoItems}</main>
    </div>
  );
}

export default App;
