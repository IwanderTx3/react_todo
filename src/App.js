import React, { Component } from 'react';
import {CompletedTask} from './components/CompletedTasks'
import {PendingTask} from './components/PendingTasks'
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
        <div className ='NewItemBox'>
        <div className='NewTask'><input className='NewTaskInput' type="text" id="newTask" placeholder="Enter New Task" onChange={this.newtask}/>
        <button id='addTask' onClick={this.addTask}>Create Task</button></div>
        </div>
        <div className='PendingItemBox'>
          <div className='titleBar'><p>Pending Items</p></div>
          
            <PendingTask pending = {this.state.pending} />
       
        </div>
        <div className='CompletedItemBox'>
          <div className='titleBar'><p>Completed Items</p></div>
          <CompletedTask completed = {this.state.completed} /> 
        </div>


    </div>
    );
  }
}

export default App;
