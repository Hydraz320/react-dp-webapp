import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {withRouter} from 'react-router-dom'

import './index.less'

class Header extends Component {
	constructor(props) {
		super(props)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	clickHanlde() {
		let history = this.props.history
		let backRouter = this.props.backRouter

		if (backRouter) {
			history.push(backRouter)
		} else {
			window.history.back()
		}
	}

	render() {
		return (
			<div className="common-header-container">
				<div className="common-header-back" onClick={this.clickHanlde.bind(this)}>
					<svg className="icon icon-yuyin" aria-hidden="true">
						<use xlinkHref="#icon-yuyin"></use>
					</svg>
				</div>
				<div className="common-header-title">{this.props.title}</div>
			</div>
		)
	}
}

export default withRouter(Header)