import React, { useState } from "react";

type Todo = {
  id: number;
  title: string;
};

interface TodoListAfterOneProps {
  onSubmit: () => Promise<any>;
}

const TodoListAfterOne: React.FC<TodoListAfterOneProps> = ({ onSubmit }) => {
  const [todos, setTodos] = useState<Todo[] | []>([]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit().then((data: Todo[]) => setTodos(data));
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
};

export default TodoListAfterOne;
