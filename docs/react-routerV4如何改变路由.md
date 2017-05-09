# 开始

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

那么现在我们该怎么写了呢？这里就要搬出大杀器[history](https://github.com/ReactTraining/history)了。官方给了这么个东西，让我们来看看怎么写。

