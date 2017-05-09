# 开始

信不信我继续占坑就是不写？

## 快速使用

其实这里给个小例子，就能跑起来了。我个人是不喜欢上来就搞个大新闻弄得太高深的，能玩起来才有的聊嘛。

```jsx harmony
/**
 *  app/index.jsx 
 */
import React from 'react'
import {render} from 'react-dom'

// 引入路由
import RouteMap from './router/AppRouter'

render(
  <RouteMap />,
  document.getElementById('root')
)
```
```jsx harmony
/** 
 * app/router/AppRouter.jsx
 */

import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Basic = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page1">Page1</Link></li>
        <li><Link to="/page2">Page2</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
    </div>
  </Router>
)
export default Basic

const Home = ({match}) => (
  <div>Home</div>
)

const Page1 = () => (
  <div>Page1</div>
)


const Page2 = ({match}) => (
  <div>
    <h2>Page2</h2>
    <ul>
      <li>
        <Link to={`${match.url}/branch1`}>
          branch1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/branch2`}>
          branch2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/branch3`}>
          branch3
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:branchId`} component={Branch}/>
    <Route exact path={match.url} render={() => (
      <h3>Default Information</h3>
    )}/>
  </div>
)

const Branch = ({match}) => {
  console.log(match);
  return (
    <div>
      <h3>{match.params.branchId}</h3>
    </div>
  )
}
```
1. Route的参数里，exact是布尔量 表示唯一匹配；render可直接指定渲染；component则是指定渲染组件；path是可匹配的url(应该是..)

2. Route渲染的组件会得到match参数，而这个参数包含path、url、isExact、params四个属性

3. 注意我们引入Router时的BrowserRouter as Router，其实在V4中(上个稳定版本是2.8了...)。在之前版本中，react-router将history(历史记录管理的玩意)分为3种：
    * hashHistory 老版本浏览器的history(有#)
    * browserHistory h5的history(没#)
    * memoryHistory node环境下的history，存储在memory中
    
    而在V4中，这仨都内置了。所以才有了上面的写法。
## 源码阅读