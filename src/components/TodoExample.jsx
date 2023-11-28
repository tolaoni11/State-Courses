import React, { useState } from "react";

export default function TodoExample() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "learn react",
      completed: true,
    },
    {
      id: 3,
      title: "learn redux",
      completed: false,
    },
    {
      id: 3,
      title: "learn react-redux",
      completed: false,
    },
  ]);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
