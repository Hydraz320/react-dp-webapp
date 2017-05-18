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
    const data = this.props.data
    return (
      <div className="list-container">
        {
          data.map((item, index) => {
            return <Item key={index} data={item} />
          })
        }
      </div>
    )
  }
}