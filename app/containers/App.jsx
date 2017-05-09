import React, {Component} from 'react'
import {render} from 'react-dom'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        {this.props.children}
      </div>
    )
  }
}