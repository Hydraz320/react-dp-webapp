import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

import ReactSwipe from 'react-swipe'

import SwipeData from './swipeData'

export default class Category extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

    this.state = {
      index: 0,
      pages: []
    }
  }

  componentWillMount() {
    this.setState({pages: SwipeData})
  }

  render() {
    let config = {
      auto: 0, // 不自己动
      callback: (index, elem) => {
        this.setState({index: index})
      }
    }
    let pages = this.state.pages
    return (
      <div className="home-category">
        <ReactSwipe swipeOptions={config}>
          {
            pages.map((page, pageIndex) => {
              return (<div key={pageIndex} className="page">
                {
                  page.map((item, itemIndex) => {
                    return <div key={itemIndex} className="item">
                      <svg className={item.iconName} aria-hidden="true">
                        <use xlinkHref={`#${item.iconName}`}></use>
                      </svg>
                    </div>
                  })
                }
              </div>)
            })
          }
        </ReactSwipe>

        <div className="circle">

        </div>
      </div>

    )
  }
}

