import React from "react";
import "./App.css";
import TodoItem from "./components/ToDoItem/ToDoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
      color: "grey",
    };

    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
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
        <div className="todo-list">{todoItems}</div>
      </div>
    );
  }
}

export default App;
