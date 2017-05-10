import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as userinfoActions from '../../actions/userinfo'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>Home</div>
    )
  }
}

export default Home