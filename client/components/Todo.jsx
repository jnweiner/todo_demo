import React from 'react';

const Todo = (props) => (
  <li onClick={() => props.updateCurrentTodo(props.todo)}>
    <span>{props.todo.task}</span>
  </li>
);

export default Todo;