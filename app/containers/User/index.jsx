import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as userinfoActions from '../../actions/userinfo'

export default class User extends Component {
  constructor(props) {
    super(props)
    // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  _jumpToCity() {
    let history = this.props.history
    history.push('/city', {
      hello: 'hello city'
    })
  }

	_jumpToHome() {
		let history = this.props.history
		history.push('/')
	}

  render() {
    return (
      <div onClick={this._jumpToHome.bind(this)}>User</div>
    )
  }
}