import axios from "axios";
import React, { useState } from "react";

type Todo = {
  id: number;
  title: string;
};

function TodoList() {
  const [todos, setTodos] = useState<Todo[] | []>([]);

  async function getTodos() {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    return res.data;
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    getTodos().then((data) => setTodos(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Показать задачи</button>
      </form>
      <div>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <p>
              {todo.id}. {todo.title}
            </p>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default TodoList;
