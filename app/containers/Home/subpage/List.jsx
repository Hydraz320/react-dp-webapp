import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ListComponent from 'components/List'
import {getListData} from 'fetch/home/home'

import './style.less'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      data: [],
      hasMore: false
    }
  }

  componentDidMount() {
    this._loadFirstPageData()
  }

  _loadFirstPageData() {
    const cityName = this.props.cityName
    const result = getListData(cityName, 0)
    this._resultHandle(result)
  }

  _resultHandle(result) {
    result.then(res => {
      return res.json()
    }).then(json => {
      const {hasMore, data} = json
      // 存储
      this.setState({
        hasMore: hasMore,
        data: data
      })
    })
  }

  render() {
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        {
          this.state.data.length
            ? <ListComponent data={this.state.data}  />
            : <div>加载中...</div>
        }
      </div>
    )
  }
}