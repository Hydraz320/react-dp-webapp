import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'

import * as userInfoActionsFromOtherFile from 'actions/userinfo'
// 试图组件
import Header from 'components/Header'
import LoginComponent from 'components/Login'

class Login extends Component {
	constructor(props) {
		super(props)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
			checking: true
		}
	}

	componentDidMount() {
		// 判断是否已经登录
		this._doCheck()
	}

	_doCheck() {
		const userinfo = this.props.userinfo

		if (userinfo.username) {
			// 如果已经登录(redux存有用户信息) 其实这里和实际开发有点区别
			this._jumpToUser()
		} else {
			// 未登录 则修改状态 展示登录界面
			this.setState({
				checking: false
			})
		}
	}

	_loginHandle(username) {
		const actions = this.props.userInfoActions
		let userinfo = this.props.userinfo

		userinfo.username = username
		actions.update(userinfo)

		const params = this.props.params
		const router = params.router
		if (router) {
			// 如果url中有登录前的页面router(其实就是为了知道是从哪个页面登录的)
			this.props.history.push(router)
		} else {
			this._jumpToUser()
		}
	}

	_jumpToUser() {
		const history = this.props.history
		console.log('_jumpToUser')
		console.log(this.state.checking)
		history.push('/user')
	}

	render() {
		return (
			<div>
				<Header title="登录"/>
				{
					this.state.checking
						? <div>等待中...</div>
						: <LoginComponent loginHandle={this._loginHandle.bind(this)}/>
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
	}
}
export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Login))