# 开始

[YouTube视频](https://www.youtube.com/watch?v=sUauVes2aC4&list=PL8vZpHuqa_hPpKUHFlyPkiI4MPexAMhvc&index=3)
[官方文档](https://reacttraining.com/react-router/web/api/Switch)

我比较懒哈，翻文档没找到(其实是有的)，看源码看了一会没看出来啥，就去google了(这么个问题肯定有人踩到啊)。这个视频简直nice啊，原来V4里有了Switch这么个东西。那么接下来我就来介绍下如何实现支持Not Found Page的路由吧，并且补充一些其他的东西。

## Route和Switch的区别

<Switch>是独一份的渲染第一个匹配到的路由，而<Route>会将匹配的每一个路由都渲染相应组件。考虑如下代码：
```jsx harmony
<Route path="/about" component={About}/>
<Route path="/:user" component={User}/>
<Route component={NoMatch}/>
```
如果URL是/about，那么About、User、NoMatch三个组件都会得到渲染，因为都匹配啊！这里作者表示是考虑到设计，这样才能各种风骚渲染嘛。

但有时，我们只想将其中某一个路由进行渲染，如果我们URL在/about但我们不想渲染/:user(明摆着...)，或者我们想展示"404"，那么我们需要像下面这样使用Switch

```jsx harmony
import { Switch, Route } from 'react-router'

<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/:user" component={User}/>
  <Route component={NoMatch}/>
</Switch>
```
这样一来，我们就能美滋滋的渲染想渲染的了！

这里需要注意一点，exact如果去掉就又会出问题，这是因为path="/"真的是都能匹配的上啊，只有设定为exact(内部有isExact,如果为true就只匹配完全匹配的path)，才能保证路由们的正常。

搞定！