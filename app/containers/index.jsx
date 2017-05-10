import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localConfigKey'
import * as userInfoActionFromOtherFile from '../actions/userinfo'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App