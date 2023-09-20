import axios from "axios";
import React, { useEffect, useState } from "react";

const TodosPageAfter = () => {
  const todos = useTodos();

  return (
    <div>
      <h4>My Todos:</h4>
      <TodoList todos={todos} />
    </div>
  );
};

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem key={todo.id} id={todo.id} title={todo.title} />
    ))}
  </ul>
);

const TodoItem = ({ id, title }) => <li>{`id: ${id}, title: ${title}`}</li>;

async function getTodos() {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  return res.data;
}

function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  return todos;
}

export default TodosPageAfter;
