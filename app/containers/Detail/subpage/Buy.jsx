import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'

import * as userInfoActionsFromOtherFile from 'actions/userinfo'
import * as storeActionsFromOtherFile from 'actions/store'

import BuyAndStore from 'components/BuyAndStore'

class Buy extends Component {
	constructor(props) {
		super(props)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

		this.state = {
			isStored: false
		}
	}

	componentDidMount() {
		this._checkStoreState()
	}

	_checkStoreState() {
		const id = this.props.id
		const store = this.props.store
		// 遍历redux中的store当前点击进入的item是否已经收藏 如果是 则将isStore修改
		store.some((item) => {
			if (item.id === id) {
				this.setState({
					isStored: true
				})
				return true
			}
		})
	}

	_buyHandle() {
		const loginFlag = this._loginCheck()
		if (!loginFlag) return
		// 省略各种购买过程 先不写了
		this.props.history.push('/user')
	}

	_storeHandle() {
		const loginFlag = this._loginCheck()

		if (!loginFlag) return

		const id = this.props.id
		const storeActions = this.props.storeActions

		if (this.state.isStored) {
			// 如果已经收藏 则取消收藏
			storeActions.remove({id: id})
		} else {
			// 如果尚未收藏 则收藏
			storeActions.add({id: id})
		}

		this.setState({
			isStored: !this.state.isStored
		})
	}

	_loginCheck() {
		const id = this.props.id
		const userinfo = this.props.userinfo

		if (!userinfo.username) {
			this.props.history.push('/login/' + encodeURIComponent('/detail/' + id))
			return false
		}
		return true
	}

	render() {
		return (
			<div>
				<BuyAndStore isStored={this.state.isStored}
				             buyHandle={this._buyHandle.bind(this)}
				             storeHandle={this._storeHandle.bind(this)}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo,
		store: state.store
	}
}

function mapDispatchToProps(dispatch) {
	return {
		storeActions: bindActionCreators(storeActionsFromOtherFile, dispatch)
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Buy))