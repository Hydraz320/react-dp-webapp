import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link, withRouter} from 'react-router-dom'

import './index.less'

class HomeHeader extends Component {
	constructor(props) {
		super(props)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
			kwd: ''
		}
	}

	_changeHandle(e) {
		this.setState({
			kwd: e.target.value
		})
	}

	_keyUpHandle(e) {
		if (e.keyCode === 13) {
			this.props.history.push('/search/all/' + encodeURIComponent(this.state.kwd))
		}
	}

	render() {
		const {city, login} = this.props // 结构出路由url
		return (
			<div className="header-container">
				<div className="header-city">
					<Link to={city}>
						<span>{this.props.cityName}</span>
						<svg className="icon icon-unfold" aria-hidden="true">
							<use xlinkHref="#icon-unfold"></use>
						</svg>
					</Link>
				</div>

				<div className="header-search">
					<div className="header-search-inner">
						<svg className="icon icon-search" aria-hidden="true">
							<use xlinkHref="#icon-search"></use>
						</svg>
						<input
							type="text"
							placeholder="请输入关键字"
							onChange={this._changeHandle.bind(this)}
							onKeyUp={this._keyUpHandle.bind(this)}
							value={this.state.kwd}
						/>
					</div>
				</div>

				<div className="header-geren">
					<Link to={login}>
						<svg className="icon icon-geren" aria-hidden="true">
							<use xlinkHref="#icon-geren"></use>
						</svg>
					</Link>
				</div>
			</div>
		)
	}
}

export default withRouter(HomeHeader)