import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as userinfoActions from '../actions/userinfo'

import A from '../components/A'
import B from '../components/B'
import C from '../components/C'

class Hello extends Component {
  componentDidMount() {
    this.props.userinfoActions.login({
      userid: 'abc',
      city: 'beijing'
    })
  }

  render() {
    return (
      <div>
        <p>Hello world</p>
        <hr/>
        <A userinfo={this.props.userinfo}/>
        <hr/>
        <B userinfo={this.props.userinfo}/>
        <hr/>
        <C actions={this.props.userinfoActions}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    userinfo: state.userinfo
  }
}

// 通过这层映射 C组件内部将可通过this.props.actions拿到actions对象
// 这个actions包含login和updateCityName两个由bindActionCreators包装过的方法
// 调用即会触发dispatch 其实在上面的componentDidMount里面也可以看到
let mapDispatchToProps = (dispatch) => {
  return {
    userinfoActions: bindActionCreators(userinfoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)