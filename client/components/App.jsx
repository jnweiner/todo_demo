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
        <h1>My To-do List</h1>
        <h2>Current to-do: <span className="current">{this.state.currentTodo.task}</span></h2>
        <h2>All to-dos:</h2>
        <TodoList
          todos={this.state.todos}
        />
      </div>
    )
  }
};

export default App;
