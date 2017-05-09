import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as userinfoActions from '../actions/userinfo'

import A from '../components/A'
import B from '../components/B'
import C from '../components/C'

class Hello extends Component {
  componentDidMount() {
    this.props.userinfoActions.login({
      userid: 'abc',
      city: 'beijing'
    })
  }

  render() {
    return (
      <div>
        <p>Hello world</p>
        <hr/>
        <A userinfo={this.props.userinfo}/>
        <hr/>
        <B userinfo={this.props.userinfo}/>
        <hr/>
        <C actions={this.props.userinfoActions}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    userinfo: state.userinfo
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    userinfoActions: bindActionCreators(userinfoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)