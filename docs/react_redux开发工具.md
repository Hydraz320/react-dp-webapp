# 开始

react-devtools

redux-devtools

```jsx harmony
import {craeteStore} from 'redux'
import rootReducer from '../reducers'

export default function (initialState) {
  const store = createStore(rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
```
注意，第三个参数是用来使用redux-devtools的 注意现在写法又[更新](https://github.com/zalmoxisus/redux-devtools-extension)了