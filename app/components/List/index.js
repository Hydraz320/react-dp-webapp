/**
 * Created by hydra320 on 2017/5/8.
 */
import React, {Component} from 'react'
import {render} from 'react-dom'
// 后面要换成purecomponent来做
import PuerRenderMixin from 'react-addons-pure-render-mixin'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PuerRenderMixin.shouldComponentUpdate.bind(this)
  }


  _onTodoClick(id) {
    this.props.onDeleteFunc(id)
  }

  render() {
    let todos = this.props.todos
    return (
      <div>
        <ul style={{marginTop: '10px', fontSize: '20px', lineHeight: '30px'}}>
          {
            todos.map((todo, index) => {
              return <li key={index} onClick={this._onTodoClick.bind(this, todo.id)}>{todo.value}</li>
            })
          }
        </ul>
      </div>
    )
  }
}