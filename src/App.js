import React, { Component } from 'react';
import {CompletedTask} from './components/CompletedTasks'
import {PendingTask} from './components/PendingTasks'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    // initializes the parent class
    super(props)

    this.state = {
      currentTaskName : '',
      pending : [],
      completed : []
    }
    // bindings
  //  this.handleTripTextBoxChange = this.handleTripTextBoxChange.bind(this)

  }

  newtask = ((e) => {

    // never do this. Always assign a brand new object to the state
    //this.state.currentTripName = e.target.value
    this.setState({
      currentTaskName : e.target.value
    })

  })

  addTask = (() => {

    let newTask = {
      title : this.state.currentTaskName,
      completed: false
    }

    // ...this.state

    this.setState({
      ...this.state,
      pending : this.state.pending.concat(newTask)
    })

  })

  render() {
    return (
      <div className="App">
        <input onChange={this.newtask} type="text" />
        <button onClick={this.addTask}>Add Task</button>
        <h1>Pending</h1>
        <PendingTask pending = {this.state.pending} />
        <h1>Completed</h1>
        <CompletedTask completed = {this.state.completed} />
      </div>
    );
  }
}

export default App;
