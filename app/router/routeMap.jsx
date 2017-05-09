import React, {Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import App from '../containers/App'
import AppRoute from './appRoute'

export default class RouteMap extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <App>
          <Route path="/" component={AppRoute}/>
        </App>
      </Router>
    )
  }
}