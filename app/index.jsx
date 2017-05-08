/**
 * Created by hydra320 on 2017/5/8.
 */
import React from 'react'
import {render} from 'react-dom'

import './static/css/common.less'

class Hello extends React.Component {
  render() {
    return (
      <p>Hello</p>
    )
  }
}

render(
  <Hello/>,
  document.getElementById('root')
)