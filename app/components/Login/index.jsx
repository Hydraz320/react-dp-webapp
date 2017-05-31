import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

class Login extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			username: ''
		}
	}

	_changeHandle(e) {
		this.setState({
			username: e.target.value
		})
	}

	_clickHandle() {
		const username = this.state.username
		const loginHandle = this.props.loginHandle
		loginHandle(username)
	}

	render() {
		return (
			<div className="login-container">
				<div className="phone-container">
					<svg className="icon icon-shouji" aria-hidden="true">
						<use xlinkHref="#icon-shouji"></use>
					</svg>
					<input
						type="text"
						placeholder="输入手机号"
						onChange={this._changeHandle.bind(this)}
						value={this.state.username}
					/>
				</div>

				<div className="password-container">
					<svg className="icon icon-mima" aria-hidden="true">
						<use xlinkHref="#icon-mima"></use>
					</svg>
					<input type="text" placeholder="输入验证码"/>
					<button>发送验证码</button>
				</div>
				<button className="btn-login" onClick={this._clickHandle.bind(this)}>登录</button>
			</div>
		)
	}
}

export default Login