
import React, {Component} from 'react'
import {CompletedToggle} from './CompletedToggle'


export class CompletedTask extends Component {

  render() {

    let completed = this.props.completed

    let completedTasks = completed.map((task,index) => {
      return (
        <li className='taskList' key={index}>
          <div className='tasktitle'>{completed.title}</div>
          <CompletedToggle/>
      </li>
      )
    })

    return (
      <ul className='taskList'>
        {completedTasks}
      </ul>
    )
  }

}
