import React from 'react';

const Todo = (props) => (
  <li>
    <span>{props.todo.task}</span>
  </li>
);

export default Todo;