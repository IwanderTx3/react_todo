
import React, {Component} from 'react'


export class Pendingtasks extends Component {

  render() {

    let trips = this.props.trips

    let tripItems = trips.map((trip,index) => {
      return (
        <li key={index}>
          {trip.title}
        </li>
      )
    })

    return (
      <ul>
        {tripItems}
      </ul>
    )
  }

}
