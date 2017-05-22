import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'

import HomeHeader from 'components/HomeHeader'
import Category from 'components/Category'
import Ad from './subpage/Ad'
import List from './subpage/List'

class Home extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  _jumpToCity() {
    this.props.history.push('/city')
  }

  render() {
    return (
      <div className="back-color">
        <HomeHeader history={this.props.history} cityName={this.props.userinfo.cityName} jumpToCity={this._jumpToCity.bind(this)} />
        <Category pages={this.props.swipedata.swipeData}/>
        <Ad />
        <List cityName={this.props.userinfo.cityName}/>
      </div>
    )
  }
}

// 为什么这里是userinfo呢？为什么HomeHeader传入的是this.props.userinfo.cityName呢？
// 其实在container/index.jsx里的componentDidMount中，我们手动触发了一个action，还记得吗？
// 也就是说此刻store.dispatch了这个action 触发相应的reducer进行了更新
// 是的 为什么下面是userinfo呢？因为！我们！combineReducers的那个就是userinfo！！！！！！
// 不信你去改名字！state这边就是依据那个来的！我艹他妈的
// 那么我们再对比下mapDispatchToProps的也就明白了 在组件里都是this.props.xmap进去的x.action发的
// 或者this.props.xmap进去的x.action creator方法({data})
// 反正我是清楚了……
const mapStateToProps = (state) => {
  return {
    userinfo: state.userinfo,
    swipedata: state.swipedata
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)