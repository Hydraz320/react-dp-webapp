import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class Info extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <h1>Info {this.props.id}</h1>
    )
  }
}