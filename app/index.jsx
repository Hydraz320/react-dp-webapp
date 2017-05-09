import React from 'react'
import {render} from 'react-dom'

// 引入路由
import RouteMap from './router/AppRouter'

// 通用样式
import './static/css/common.less'

// 性能检测
import Perf from 'react-addons-perf'
if (__DEV__) {
  window.Perf = Perf
}

render(
  <RouteMap />,
  document.getElementById('root')
)
