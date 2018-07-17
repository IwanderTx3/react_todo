
import React, {Component} from 'react'


export class CompletedToggle extends Component {

  completeToggle = (() => {
      console.log('it works')

    })

  render() {
      return (
        <button onClick={this.completeToggle}>toggle Completed</button>
      )
    }

}
