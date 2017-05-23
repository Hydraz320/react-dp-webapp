import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

export default class Star extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    let star = this.props.star || 0
    if (star > 5) {
      star = star % 5
    }
    return (
      <div className="star-container">
        {[1, 2, 3, 4, 5].map((item, index) => {
          const starLight = star >= item ? ' star-light' : ''
          return (
            <svg key={index} className={"icon icon-star" + starLight} aria-hidden="true">
              <use xlinkHref="#icon-star"></use>
            </svg>
          )
        })}
      </div>
    )
  }
}