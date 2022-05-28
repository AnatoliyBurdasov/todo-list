import React from "react";

import "./TodoList.scss";
import TodoListItem from "../todo-list-item/TodoListItem";

const TodoList = ({ todos, onToggleDone, onDeleteItem, onToggleImportant }) => {
  return (
    <ul className="list-group todo-list">
      {todos &&
        todos.map((todo) => {
          return (
            <li key={todo.id} className="todo-list__item my-1 rounded">
              <TodoListItem
                {...todo}
                onToggleDone={() => onToggleDone(todo.id)}
                onDeleteItem={() => onDeleteItem(todo.id)}
                onToggleImportant={() => onToggleImportant(todo.id)}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
