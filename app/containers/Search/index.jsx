import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as userinfoActions from '../../actions/userinfo'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  componentDidMount() {
    console.log(this.props.match.params.category)
    console.log(this.props.match)
  }

  render() {
    return (
      <div>Search</div>
    )
  }
}