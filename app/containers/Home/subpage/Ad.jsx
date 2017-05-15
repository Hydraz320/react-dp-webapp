import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeAd from 'components/HomeAd'

import {getAdData} from 'fetch/home/home'

export default class Ad extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const result = getAdData()
    result.then((res) => {
      return res.json()
    }).then((json) => {
      const data = json
      if (data.length) {
        this.setState({
          data: data
        })
      }
    }).catch((err) => {
      if (__DEV__) {
        console.error('首页广告模块获取数据报错, ', err.message)
      }
    })
  }

  render() {
    return <HomeAd data={this.state.data}/>
  }
}