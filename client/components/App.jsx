import React from 'react';
import sampleTodos from '../sampleTodos.js';
import TodoList from './TodoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: sampleTodos,
      currentTodo: sampleTodos[0]
    }
  }

  render() {
    return (
      <div>
        <h1>My To-Do List</h1>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
};

export default App;
