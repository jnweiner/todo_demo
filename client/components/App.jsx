import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
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
