/**
 * Created by hydra320 on 2017/5/9.
 */
import React, {Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Detail from '../containers/Detail'
import Home from '../containers/Home'
import List from '../containers/List'
import NotFound from '../containers/NotFound'

export default class SubRoute extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/list" component={List}/>
        <Route path="/detail/:id" component={Detail}/>
        <Route component={NotFound}/>
      </Switch>
    )
  }
}