# 开始

有时我们的URL的匹配里可能会有可选参数，也即出现或不出现皆可的情况，在早先版本的React-Router中，我们可以这么写：

[参考了下阮老师的博客](http://www.ruanyifeng.com/blog/2016/05/react_router.html)
```jsx harmony
<Route path="/hello(/:name)">
// 匹配 /hello
// 匹配 /hello/michael
// 匹配 /hello/ryan
```

然而在V4版本中，我们对于路由的匹配是基于[path-to-regexp](https://www.npmjs.com/package/path-to-regexp)的，所以就要稍加修改一下咯：

```jsx harmony
var re = pathToRegexp('/:foo/:bar?', keys)
// keys = [{ name: 'foo', ... }, { name: 'bar', delimiter: '/', optional: true, repeat: false }] 
```

也就是在后面加上？。亲测有效，算是又踩了个坑。