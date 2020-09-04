import React, { Component } from 'react';
import Notes from './components/notes/notes'
import Toolbar from './components/Toolbar/Toolbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
      </div>
    );
  }
}

export default App;
