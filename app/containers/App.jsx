import {Component} from 'react'
import {render} from 'react-dom'

export default class App {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}