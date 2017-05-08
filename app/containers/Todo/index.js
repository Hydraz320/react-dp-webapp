/**
 * Created by hydra320 on 2017/5/8.
 */
import React, {Component} from 'react'
import {render} from 'react-dom'

import Input from '../../components/Input'
import List from '../../components/List'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  _onSubmitFunc(value) {
    let todos = this.state.todos
    const id = todos.reduce((maxId, todo) => {
        return Math.max(maxId, todo.id)
      }, -1) + 1
    this.setState({
      todos: todos.concat({
        id: id,
        value: value
      })
    })
  }

  _onDeleteFunc(id) {
    let todos = this.state.todos
    this.setState({
      todos: todos.filter((todo) => {
        return todo.id !== id
      })
    })
  }

  render() {
    return (
      <div>
        <Input onSubmitFunc={this._onSubmitFunc.bind(this)}/>
        <List todos={this.state.todos} onDeleteFunc={this._onDeleteFunc.bind(this)}/>
      </div>
    )
  }
}

export default Todo