import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localConfigKey'
import * as userInfoActionFromOtherFile from '../actions/userinfo'

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
    userinfoActions: bindActionCreators(userInfoActionFromOtherFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
































