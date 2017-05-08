import React from 'react'
import {render} from 'react-dom'

// 通用样式
import './static/css/common.less'

// 引入容器组件
import Todo from './containers/Todo';

// 性能检测
import Perf from 'react-addons-perf'
if (__DEV__) {
  window.Perf = Perf
}

render(
  <Todo />,
  document.getElementById('root')
)
