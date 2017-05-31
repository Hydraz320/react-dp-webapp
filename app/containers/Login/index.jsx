import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'redux'

// 创建history对象
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <h1>Login</h1>
        )
    }
}