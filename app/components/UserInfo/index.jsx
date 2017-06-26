import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

class UserInfo extends Component {
	constructor(props) {
		super(props)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	render() {
		const {username, city} = this.props

		return (
			<div className="userinfo-container">
				<p>
					<svg className="icon icon-geren" aria-hidden="true">
						<use xlinkHref="#icon-geren"></use>
					</svg>
					{username}
				</p>

				<p>
					<svg className="icon icon-zhoubian" aria-hidden="true">
						<use xlinkHref="#icon-zhoubian"></use>
					</svg>
					{city}
				</p>
			</div>
		)
	}
}

export default UserInfo