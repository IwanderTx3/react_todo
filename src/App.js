import React, { Component } from 'react';
import {completedTask} from './components/completedTasks'
import {pendingTask} from './components/pendingTasks'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    // initializes the parent class
    super(props)

    this.state = {
      currentTask = "",
      pending : [],
      completed : []
    }

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
