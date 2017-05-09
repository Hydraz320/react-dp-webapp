import React, {Component} from 'react'

export default class B extends Component {
  render() {
    return (
      <p>{this.props.userinfo.city}</p>
    )
  }
}