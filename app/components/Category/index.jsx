import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

import ReactSwipe from 'react-swipe'

export default class Category extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

    this.state = {
      index: 0,
    }
  }

  render() {
    let config = {
      auto: 0, // 不自己动
      continuous: false,
      callback: (index, elem) => {
        this.setState({index: index})
      }
    }
    let pages = this.props.pages

    return (
      <div className="home-category">
        <ReactSwipe className="swipe" swipeOptions={config}>
          {
            pages.map((page, pageIndex) => {
              return (<div key={pageIndex} className="page">
                {
                  page.map((item, itemIndex) => {
                    return <div key={itemIndex} className="item">
                      <svg className={`icon ${item.iconName}`} aria-hidden="true">
                        <use xlinkHref={`#${item.iconName}`}></use>
                      </svg>
                      <div className="title">{item.title}</div>
                    </div>
                  })
                }
              </div>)
            })
          }
        </ReactSwipe>

        <div className="circle-container">
          {
            pages.map((page, pageIndex) => {
              return (<div key={pageIndex} className={`circle${this.state.index === pageIndex ? ' selected': ''}`}></div>)
            })
          }
        </div>
      </div>

    )
  }
}

