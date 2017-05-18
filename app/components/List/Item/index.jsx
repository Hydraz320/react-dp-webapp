import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

export default class Item extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}