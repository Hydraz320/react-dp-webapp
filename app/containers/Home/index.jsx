import React, {Component} from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router-dom'


class Home extends Component {
  render() {
    return (
      <div>
        <p>Home</p>
        <Link to="/list">Link to list</Link>
      </div>
    )
  }
}

export default Home