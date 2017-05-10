import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import * as userinfoActions from '../../actions/userinfo'

import HomeHeader from '../../components/HomeHeader'

class Home extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <div>
        <HomeHeader/>
      </div>
    )
  }
}

export default Home