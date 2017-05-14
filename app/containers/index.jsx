import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localConfigKey'
import * as userInfoActionFromOtherFile from '../actions/userinfo'
import * as swipeDataActionFromOtherFile from '../actions/swipedata'

// 应该是异步获取的 当然本地写死也没什么 这里是直接import引入
import SwipeData from '../components/Category/swipeData'

class App extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

    this.state = {
      initDone: false
    }
  }

  componentDidMount() {
    let cityName = LocalStore.getItem(CITYNAME)
    this.props.userinfoActions.update({
      cityName: '上海'
    })
    this.props.swipeDataActions.swipe({
      swipeData: SwipeData
    })
    this.setState({initDone: true})
  }

  render() {
    return (
      <div>
        {
          this.state.initDone
            ? this.props.children
            : <div>加载中...</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    userinfoActions: bindActionCreators(userInfoActionFromOtherFile, dispatch),
    swipeDataActions: bindActionCreators(swipeDataActionFromOtherFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
































