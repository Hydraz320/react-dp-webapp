# 开始

## 什么坑？
说实话写下这个的时候我已经后悔用V4了……不知道是不是我没看到正确的打开方式，反正我现在发现曾经2.8里下面这种可行的写法已经么得了：
```jsx harmony
// 外面
import {hashHistory} from 'react-router'
render(
  <RouteMap history={hashHistory},
  document.getElementById('root')
)
// 里面
class RouteMap extends React.Component {
  _updateHandle() {
    // ...
  }
  render() {
    return (
      <Router history={this.props.history} onUpdate={this._updateHandle.bind(this)}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='list' component={List}/>
          <Route path='detail/:id' component={Detail}/>                 <Route path='*' component={NotFound}/>
        </Route>
      </Router>
    )
  }
}
```
当然，不仅是history不能这么用了，上面的写法也不可行了。怎么个不可行可参考其他几篇写router的文章。

那么现在我们该怎么写了呢？这里就要搬出[history](https://github.com/ReactTraining/history)了。官方给了这么个东西，让我们来看看怎么写。

## 如何组织和实现

这里我会先介绍路由是怎么在项目中组织的。毕竟实现总是可以的，但是乱了就不好玩了嘛。

**/app/index.jsx**
入口文件写法如下：
```jsx harmony
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
```
根据文档给的代码段，我们需要首先初始化一个history对象，然后将其交给Router。这里有点Provider的意思哦。事实上，在内部路由的任何组件内，都可以通过this.props.history拿到history对象，是不是很凶残哦。

注意到Router里面先包了一层App，这个组件是containers目录下的"入口"文件。事实上因为依赖于router的处理，入口的意义已经淡化了，但是这样去写的话能够有一个统一的结构，在App里通过this.props.children把Route的路由渲染出来，是不是比没有这一层包裹看起来好点呢？

Route传入的component并非真正的视图组件或容器组件，而是子路由。这里是为了方便管理。在SubRoute内部，组织方式如下：
```jsx harmony
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
```

通过[这篇笔记](./react-routerV4的Page%20Not%20Found该怎么做.md)所提到的那样，引入各个子组件，实现渲染。然后在需要实现路由跳转的组件内部，如List内部跳转到Detail，代码是这样的：
```jsx harmony
import React, {Component} from 'react'
import {render} from 'react-dom'

class List extends Component {
  constructor(props) {
    super(props)
  }

  _clickHandler(value) {
    let history = this.props.history
    history.push(`/detail/${value}`)
  }

  render() {
    const arr = [1, 2, 3]
    return (
      <div>
        <h3>List</h3>
        <ul>
          {
            arr.map((item, index) => {
              return <li key={index} onClick={this._clickHandler.bind(this, item)}>JS jump to /detail/{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default List
```

这里是怎么个意思呢？我们可以看到render里渲染了3个li，每个都绑定了click事件，调用_clickHandler方法，而这个方法内部，正是通过this.props.history拿到history对象，并通过push方法跳转到detail页面。

当然，history还支持replace等多种常用方法，具体就可以去[文档](https://github.com/ReactTraining/history)里看看哦。

好了，就写到这吧！

