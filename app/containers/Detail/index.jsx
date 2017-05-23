import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as userinfoActions from 'actions/userinfo'

import Header from 'components/Header'
import Info from './subpage/Info'
import Comment from './subpage/Comment'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const id = this.props.match.params.id
    return (
      <div>
        <Header title="商户详情"/>
        <Info id={id}/>
        <Comment id={id}/>
      </div>
    )
  }
}