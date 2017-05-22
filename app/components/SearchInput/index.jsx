import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

export default class SearchInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    this.setState({
      value: this.props.value || ''
    })
  }

  _changeHandle(e) {
    this.setState({
      value: e.target.value
    })
  }

  _keyUpHandle(e) {
    // 监控 enter 事件
    if (e.keyCode !== 13) {
      return
    }
    this.props.enterHandle(e.target.value)
  }

  render() {
    return (
      <input
        className="search-input"
        type="text"
        placeholder="请输入关键字"
        onChange={this._changeHandle.bind(this)}
        onKeyUp={this._keyUpHandle.bind(this)}
        value={this.state.value}/>
    )
  }
}