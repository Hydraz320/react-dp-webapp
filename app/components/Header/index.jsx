import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

export default class CityList extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <div className="common-header-container">
        <div className="common-header-back" onClick={this.props.backFn}>
          <svg className="icon icon-yuyin" aria-hidden="true">
            <use xlinkHref="#icon-yuyin"></use>
          </svg>
        </div>
        <div className="common-header-title">{this.props.title}</div>
      </div>
    )
  }
}