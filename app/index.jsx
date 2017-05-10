import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import ConfigureStore from './store/ConfigureStore'

// 淘宝样式reset
import './static/css/reset.css'
import './static/css/common.less'
// 阿里妈妈字体
import './static/font/iconfont'

// 性能检测
import Perf from 'react-addons-perf'
if (__DEV__) {
  window.Perf = Perf
}

// 引入路由
import AppRouter from './router/AppRouter'

// 生成store 内部有去拿reducer
const store = ConfigureStore()

// 渲染
render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)
