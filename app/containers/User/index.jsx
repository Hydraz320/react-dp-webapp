import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import * as userinfoActions from 'actions/userinfo'

import Header from 'components/Header'
import UserInfo from 'components/UserInfo'

class User extends Component {
	constructor(props) {
		super(props)
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	render() {
		const {username, cityName} = this.props.userinfo
		return (
			<div>
				<Header title="用户中心" backRouter="/"/>
				<UserInfo username={username} city={cityName}/>
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
	return {}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(User))

