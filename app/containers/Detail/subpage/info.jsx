import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {getInfoData} from 'fetch/detail/detail'

import DetailInfo from 'components/DetailInfo'

export default class Info extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      info: false
    }
  }

  componentDidMount() {
    this._getInfo()
  }

  _getInfo() {
    const id = this.props.id
    const result = getInfoData(id)
    result.then((res) => {
      return res.json()
    }).then((json) => {
      this.setState({
        info: json
      })
    }).catch((e) => {
      if(__DEV__) {
        console.error('详情页 获取商户信息出错')
      }
    })
  }

  render() {
    return (
      <div>
        {
          this.state.info
            ? <DetailInfo data={this.state.info}/>
            : ''
        }
      </div>
    )
  }
}