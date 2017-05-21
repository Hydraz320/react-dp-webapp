import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as userinfoActions from '../../actions/userinfo'

export default class User extends Component {
  constructor(props) {
    super(props)
    // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    console.log(this.props.history)
  }

  _jumpToCity() {
    let history = this.props.history
    history.push('/city', {
      hello: 'hello city'
    })
  }

  render() {
    return (
      <div onClick={this._jumpToCity.bind(this)}>User</div>
    )
  }
}