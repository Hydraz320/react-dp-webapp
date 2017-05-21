import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

export default class LoadMore extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  componentDidMount() {
    const loadMoreFn = this.props.loadMoreFn
    const wrapper = this.refs.wrapper
    let timeoutid

    function callback() {
      const top = wrapper.getBoundingClientRect().top
      const windowHeight = window.screen.height
      console.log('top: ' + top)
      console.log('height: ' + windowHeight)
      if (top && top < windowHeight) {
        // 模拟异步
        // todo 这边逻辑有问题的 延迟两秒执行的代码里存在转换加载中...状态的语句 导致延迟之后切换过快 看不到变化
        loadMoreFn()
      }
    }

    window.addEventListener('scroll', function (e) {
      if (this.props.isLoadingMore) {
        return
      }
      // debounce
      if (timeoutid) {
        clearTimeout(timeoutid)
      }
      timeoutid = setTimeout(callback, 50)
    }.bind(this), false)
  }

  _loadMoreHandle() {
    this.props.loadMoreFn()
  }

  render() {
    return (
      <div className="load-more" ref="wrapper">
        {
          this.props.isLoadingMore
            ? <span>加载中...</span>
            : <span onClick={this._loadMoreHandle.bind(this)}>加载更多</span>
        }
      </div>
    )
  }
}