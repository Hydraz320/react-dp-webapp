import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import App from '../containers/'
import SubRouter from './SubRouter'

// 让Router有用js跳转的能力 另一种方法是link标签
import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

export default class AppRouter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router history={customHistory}>
        <App>
          <Route path="/" component={SubRouter}/>
        </App>
      </Router>
    )
  }
}