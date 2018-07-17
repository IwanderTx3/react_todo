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
      pending : [],
      completed : []
    }
    // bindings
  //  this.handleTripTextBoxChange = this.handleTripTextBoxChange.bind(this)

  }

  handleAddTaskClick = (() => {

    let newTask = { title : this.state.currentTaskName }

    // ...this.state

    this.setState({
      ...this.state,
      pending : this.state.pending.concat(newTask)
    })

  })


  handleTaskBoxChange = ((e) => {

    // never do this. Always assign a brand new object to the state
    //this.state.currentTripName = e.target.value

    this.setState({
      currentTaskName : e.target.value
    })

  })

  render() {
    return (
      <div className="App">
        working!
      </div>
    );
  }
}

export default App;
