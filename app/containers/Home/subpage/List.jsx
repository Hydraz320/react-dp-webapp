import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ListComponent from 'components/List'
import LoadMore from 'components/LoadMore'
import {getListData} from 'fetch/home/home'

import './style.less'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      data: [], // 存储列表信息
      hasMore: false, // 记录当前状态下还有无更多数据可加载
      isLoadingMore: false, // 当即状态下是加载中。。。还是点击加载
      page: 0 // 下一页页码
    }
  }

  componentDidMount() {
    this._loadFirstPageData()
  }

  _loadFirstPageData() {
    // 加载首页数据
    const cityName = this.props.cityName
    const result = getListData(cityName, 0)
    // 处理数据
    this._resultHandle(result)
  }

  _loadMoreData() {
    this.setState({isLoadingMore: true})
    // 加载下一页数据
    const cityName = this.props.cityName
    const page = this.state.page
    const result = getListData(cityName, page)
    // 处理数据
    this._resultHandle(result)
    this.setState({isLoadingMore: false})
  }

  _resultHandle(result) {
    result.then(res => {
      return res.json()
    }).then(json => {
      const hasMore = json.hasMore
      const data = json.data

      this.setState({
        hasMore: hasMore,
        page: this.state.page + 1,
        data: this.state.data.concat(data)
      })
    }).catch(ex => {
      if (__DEV__) {
        console.error('首页”猜你喜欢“获取数据报错, ', ex.message)
      }
    })
  }

  render() {
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        {
          this.state.data.length
            ? <ListComponent data={this.state.data}/>
            : <div>加载中...</div>
        }
        {
          this.state.hasMore
            ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this._loadMoreData.bind(this)}/>
            : ''
        }
      </div>
    )
  }
}