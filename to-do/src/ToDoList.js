import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";
import { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const addToDo = (newToDo) => {
    setTodos([...todos, newToDo]);
  };

  const removeToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateToDo = (id, updatedToDo) => {
    const updatedToDos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: updatedToDo };
      }
      return todo;
    });
    setTodos(updatedToDos);
  };

  const toDoComponents = todos.map((todo) => (
    <ToDo
      key={todo.id}
      id={todo.id}
      text={todo.text}
      removeToDo={removeToDo}
      updateToDo={updateToDo}
    />
  ));

  return (
    <div className="ToDoList">
      <NewToDoForm addToDo={addToDo} />
      {toDoComponents}
    </div>
  );
};

export default ToDoList;
