import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

export default class HomeHeader extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <div className="header-container">
        <div className="header-city">城市</div>

        <svg className="icon icon-unfold" aria-hidden="true">
          <use xlinkHref="#icon-unfold"></use>
        </svg>

        <div className="header-search"><input type="text"/></div>
        <div className="header-user">用户</div>
      </div>
    )
  }
}