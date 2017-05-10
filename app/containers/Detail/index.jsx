import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as userinfoActions from '../../actions/userinfo'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    console.log('Detail constructor')
  }

  render() {
    console.log(this.props.match)
    return (
      <div>Detail</div>
    )
  }
}