import React from 'react';
import sampleTodos from '../sampleTodos.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: sampleTodos
    }
  }

  render() {
    return (
      <div>
        This is a React test
      </div>
    )
  }
};

export default App;
