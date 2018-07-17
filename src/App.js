import React, { Component } from 'react';

import {completedTask} from './components/completedTasks'
import {pendingTask} from './components/pendingTasks'


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

        <div className ='NewItemBox'>
        <div className='NewTask'><input className='NewTaskInput' type="text" id="newTask" placeholder="Enter New Task" /><button id='addTask'>Create Task</button></div>
        </div>
        <div className='PendingItemBox'>
          <div className='titleBar'><p>Pending Items</p></div>
          <ul>
            <li className='taskList'>
              <div className='tasktitle'>A Place Holder Task</div>
              <div className='blank'></div>
              <button className='complete'></button>
              <button className='delete'></button>
            </li>
          </ul>
        </div>
        <div className='CompletedItemBox'>
          <div className='titleBar'><p>Completed Items</p></div>
          <ul>
            <li className='taskList'>
              <div className='tasktitle'>A Place Holder Task</div>
              <div className='blank'></div>
              <button className='complete'></button>
              <button className='delete'></button>
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
