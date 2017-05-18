import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'
import './index.less'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <div>
        List Component
      </div>
    )
  }
}