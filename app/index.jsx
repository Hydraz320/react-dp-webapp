import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import ConfigureStore from './store/ConfigureStore'

// 通用样式
import './static/css/common.less'

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
    <AppRouter history={AppRouter} />
  </Provider>,
  document.getElementById('root')
)
