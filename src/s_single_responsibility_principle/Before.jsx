import axios from "axios";
import React, { useEffect, useState } from "react";

const TodosPageBefore = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      setTodos(data);
    }
    getTodos();
  }, []);

  return (
    <div>
      <h4>My Todos:</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{`id: ${todo.id}, title: ${todo.title}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodosPageBefore;
