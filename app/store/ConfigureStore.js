import {createStore} from 'redux'
import rootReducer from '../reducers'

// 第三个参数是用来使用redux-devtools的 注意现在写法又更新了
export default function (initialState) {
  const store = createStore(rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
