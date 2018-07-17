
import React, {Component} from 'react'


export class completedTask extends Component {

  render() {

    let completed = this.props.completed

    let completedTasks = completed.map((task,index) => {
      return (
        <li key={index}>
          {completed.title}
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
