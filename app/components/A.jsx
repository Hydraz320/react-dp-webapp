import React, {Component} from 'react'

export default class A extends Component {
  render() {
    return (
      <p>{this.props.userinfo.userid}</p>
    )
  }
}