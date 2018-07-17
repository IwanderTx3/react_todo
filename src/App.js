import React, { Component } from 'react';

import './App.css';

class App extends Component {
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
