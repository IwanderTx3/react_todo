
import React, {Component} from 'react'


export class pendingTask extends Component {

  render() {

    let pending = this.props.pending

    let pendingTasks = pending.map((task,index) => {
      return (
        <li key={index}>
          {pending.title}
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
