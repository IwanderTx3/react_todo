
import React, {Component} from 'react'
import {CompletedToggle} from './CompletedToggle'

export class PendingTask extends Component {

  render() {

    let pending = this.props.pending

    let pendingTasks = pending.map((task,index) => {
      return (
        <li key={index}>
          {pending[index].title}
          <CompletedToggle/>
        </li>
      )
    })

    return (
      <ul>
        {pendingTasks}
      </ul>
    )
  }

}
