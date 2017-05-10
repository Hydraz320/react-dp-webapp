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
        <div className="header-city">
          <span>{this.props.cityName}</span>
          <svg className="icon icon-unfold" aria-hidden="true">
            <use xlinkHref="#icon-unfold"></use>
          </svg>
        </div>

        <div className="header-search">
          <div className="header-search-inner">
            <svg className="icon icon-search" aria-hidden="true">
              <use xlinkHref="#icon-search"></use>
            </svg>
            <input type="text" placeholder="请输入关键字"/>
          </div>
        </div>

        <div className="header-user">
          <svg className="icon icon-yidiandiantubiao08" aria-hidden="true">
            <use xlinkHref="#icon-yidiandiantubiao08"></use>
          </svg>
        </div>
      </div>
    )
  }
}