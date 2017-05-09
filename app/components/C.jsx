import React, {Component} from 'react'

export default class C extends Component {
  _changeUserInfo() {
    // actions是一个对象 里面有login、updateCityName两个函数
    // 这两个函数虽然名字同action creator，但其实是bindActionCreators包过dispatch的一个新函数
    // 调用之后就相当于store.dispatch({})然后触发reducer去修改state再重新render
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