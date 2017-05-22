/**
 * Created by hydra320 on 2017/5/9.
 */
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from 'containers/Home'
import User from 'containers/User'
import City from 'containers/City'
import Search from 'containers/Search'
import Detail from 'containers/Detail'
import NotFound from 'containers/404'

export default class SubRouter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/city" component={City}/>
        <Route path="/user" component={User}/>
        <Route exact path="/search/:category/:keyword?" component={Search}/>
        <Route path="/detail/:id" component={Detail}/>
        <Route component={NotFound}/>
      </Switch>
    )
  }
}