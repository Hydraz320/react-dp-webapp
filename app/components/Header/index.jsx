import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

export default class CityList extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  // 这样写就减少了和history的耦合
  _backHandle() {
    window.history.back()
  }

  render() {
    return (
      <div className="common-header-container">
        <div className="common-header-back" onClick={this._backHandle.bind(this)}>
          <svg className="icon icon-yuyin" aria-hidden="true">
            <use xlinkHref="#icon-yuyin"></use>
          </svg>
        </div>
        <div className="common-header-title">{this.props.title}</div>
      </div>
    )
  }
}