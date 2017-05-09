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

import Hello from './containers/Hello'

const store = ConfigureStore()
render(
  <Provider store={store}>
    <Hello/>
  </Provider>,
  document.getElementById('root')
)
