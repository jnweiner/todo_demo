import React from 'react';
import Todo from './Todo.jsx';

const TodoList = (props) => (
  <ul>
    {props.todos.map((todo, i) => <Todo key={i} todo={todo} />)}
  </ul>
);

export default TodoList;