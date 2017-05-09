import React, {Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import AppRoute from './appRoute'

export default class RouteMap extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          <h1>App</h1>
          <Route path="/" component={AppRoute} />
        </div>
      </Router>
    )
  }
}