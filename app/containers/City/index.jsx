import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as userinfoActions from '../../actions/userinfo'

export default class City extends Component {
  constructor(props) {
    super(props)
    // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    console.log(this.props.history)
  }

  _jumpToUser() {
    let history = this.props.history
    history.push('/user', {
      hello: 'hello user'
    })
  }

  render() {
    return (
      <div onClick={this._jumpToUser.bind(this)}>City</div>
    )
  }
}