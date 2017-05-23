import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

import Star from 'components/Star'

export default class DetailInfo extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const data = this.props.data
    return (
      <div className="detail-info-container">
        <div className="info-container">
          <div className="info-img-container">
            <img src={data.img}/>
          </div>
          <div className="info-content">
            <h1>{data.title}</h1>
            <div className="star-container">
              <Star star={data.star}/>
              <span className="price">￥{data.price}</span>
            </div>
            <p className="sub-title">{data.subTitle}</p>
          </div>
        </div>
        {
          data.desc.split('\<br\>').map((item, index) => {
            return <p key={index} className="info-desc">{item.trim()}</p>
          })
        }
      </div>
    )
  }
}