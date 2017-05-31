import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'redux'
import {withRouter} from 'react-router-dom'

class Login extends Component {
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

export default withRouter(Login)