/**
 * Created by hydra320 on 2017/5/31.
 */
import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

export default class BuyAndStore extends Component {
	constructor(props) {
		super(props)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	_storeClickHandle() {
		this.props.storeHandle()
	}

	_buyClickHandle() {
		this.props.buyHandle()
	}

	render() {
		return (
			<div className="buy-store-container">
				<div className="item-container">
					{
						this.props.isStored
							? <button className="selected" onClick={this._storeClickHandle.bind(this)}>已收藏</button>
							: <button onClick={this._storeClickHandle.bind(this)}>收藏</button>
					}
				</div>
				<div className="item-container">
					<button onClick={this._buyClickHandle.bind(this)}>购买</button>
				</div>
			</div>
		)
	}
}