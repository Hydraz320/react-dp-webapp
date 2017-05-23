import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router-dom'

import './index.less'

export default class Item extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const data = this.props.data
    return (
      <Link to={`/detail/${data.id}`} className="list-item">
        <div className="item-img-container">
          <img src={data.img} alt={data.title}/>
        </div>
        <div className="item-content">
          <div className="item-title-container">
            <h3 className="item-title">{data.title}</h3>
            <span className="item-distance">{data.distance}</span>
          </div>
          <p className="item-sub-title">
            {data.subTitle}
          </p>
          <div className="item-price-container">
            <span className="item-price">￥{data.price}</span>
            <span className="item-number">已售{data.mumber}</span>
          </div>
        </div>
      </Link>
    )
  }
}