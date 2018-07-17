
import React, {Component} from 'react'


export class CompletedToggle extends Component {

  completeToggle = (() => {
      console.log('it works')

    })

  render() {
      return (
        <div className='complete'>
        <button onClick={this.completeToggle}>toggle Completed</button>
        </div>
      )
    }

}
