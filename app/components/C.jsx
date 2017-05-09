import React, {Component} from 'react'

export default class C extends Component {
  _changeUserInfo() {
    const actions = this.props.actions
    actions.login({
      userid: '123',
      city: 'nanjing'
    })
  }

  render() {
    return (
      <div>
        <button onClick={this._changeUserInfo.bind(this)}>修改</button>
      </div>
    )
  }
}