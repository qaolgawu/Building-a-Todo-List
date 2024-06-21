import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { toBeInvalid } from "@testing-library/jest-dom/dist/matchers";
import TodoItem from "./components/TodoItem";


function App() {
  const [todos, setTodos] = useState([]);
  const addTask = (userInput) => {
    if(userInput) {
      const newTask = {
        id: Date.now(),
        task: userInput,
        completed: false,
      };
      setTodos([...todos, newTask]);
    }
  };
  console.log(todos)
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }
  const toggleTask = (id) => {
    setTodos([...todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed } : {...todo})])
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTask={addTask}/>
      <hr className="separator"/>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} removeTask={removeTask} toggleTask={toggleTask}/>
      ))}
    </div>
  );
}
export default App;
