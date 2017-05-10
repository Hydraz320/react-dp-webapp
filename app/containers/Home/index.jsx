import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import * as userinfoActions from '../../actions/userinfo'

class Home extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/detail/1">Detail:1</Link>
      </div>
    )
  }
}

export default Home