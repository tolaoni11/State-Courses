import React, { useState } from "react";

export default function TodoExample() {
  const todoItems = [
    {
      id: 1,
      title: "learn react",
      completed: true,
    },
    {
      id: 2,
      title: "learn redux",
      completed: false,
    },
    {
      id: 3,
      title: "learn react-redux",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(todoItems);

  const handleCheckboxChange = (todoId) => {
    //find the todo items with the matching id
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        //edit the todo item and return id
        return { ...todo, completed: !todo.completed };
      }
      //return the todo item edit
      return todo;
    });
    //update the todo state
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
