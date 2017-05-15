import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

export default class HomeAd extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    let data = this.props.data
    console.log(data.length)
    return (
      <div className="ad-home">
        <h2 className="ad-title">超值特惠</h2>
        <div className="ad-container">
          {
            data.map((item, index) => {
              return (
                <div key={index} className="ad-box">
                  <a href={item.link} target="_blank">
                    <img src={item.img} alt={item.title} className="ad-image"/>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}