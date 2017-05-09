import React, {Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import App from '../containers/App'
import SubRoute from './subRoute'

// 让Router有用js跳转的能力 另一种方法是link标签
import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

export default class RouteMap extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router history={customHistory}>
        <App>
          <Route path="/" component={SubRoute}/>
        </App>
      </Router>
    )
  }
}