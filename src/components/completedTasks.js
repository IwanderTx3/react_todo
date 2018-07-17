
import React, {Component} from 'react'
import {CompletedToggle} from './CompletedToggle'


export class CompletedTask extends Component {

  render() {

    let completed = this.props.completed

    let completedTasks = completed.map((task,index) => {
      return (
        <li key={index}>
          {completed.title}
          <CompletedToggle/>
      </li>
      )
    })

    return (
      <ul>
        {completedTasks}
      </ul>
    )
  }

}
