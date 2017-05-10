import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class NotFound extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <h1><b>404</b> Not found page</h1>
    )
  }
}