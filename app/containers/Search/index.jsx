import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as userinfoActions from '../../actions/userinfo'

export default class Search extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>Search</div>
    )
  }
}