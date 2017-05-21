// 各种依赖
import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// 存储相关
import {CITYNAME} from 'config/localStoreKey'
import localStore from 'util/localStore'
// redux需要的actions
import * as userinfoActions from 'actions/userinfo'

// 木偶组件/视图组件
import Header from 'components/Header'
import CurrentCity from 'components/CurrentCity'
import CityList from 'components/CityList'

class City extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  _changeCity(newCity) {
    if (newCity == null) {
      return
    }
    // 修改redux
    const userinfo = this.props.userinfo
    userinfo.cityName = newCity
    this.props.userInfoActions.update(userinfo)
    // 修改storage
    localStore.setItem(CITYNAME, newCity)
    // 跳转回主页
    this.props.history.replace('/')
  }

  _back() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <Header title="选择城市" backFn={this._back.bind(this)}/>
        <CurrentCity cityName={this.props.userinfo.cityName}/>
        <CityList changeFn={this._changeCity.bind(this)}/>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    userinfo: state.userinfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userInfoActions: bindActionCreators(userinfoActions, dispatch)
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(City))