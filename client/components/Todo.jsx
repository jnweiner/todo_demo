import React from 'react';

const Todo = (props) => (
  <li className="todoitem">
    <span>{props.todo.task}</span>
  </li>
);

export default Todo;