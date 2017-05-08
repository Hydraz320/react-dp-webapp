/**
 * Created by hydra320 on 2017/5/8.
 */
import React, {Component} from 'react'
import {render} from 'react-dom'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  _onChange(e) {
    let newText = e.target.value.trim()
    this.setState({
      value: newText
    })
  }

  _onKeyUp(e) {
    e.preventDefault()
    let value = this.state.value.trim()
    if(e.keyCode === 13 && value) {
      this.props.onSubmitFunc(value)
      this.setState({
        value: ''
      })
    }
  }

  render() {
    return (
      <div>
        <input
          style={{width: '100%', height: '100%', fontSize: '36px'}}
          value={this.state.value}
          onChange={this._onChange.bind(this)}
          onKeyUp={this._onKeyUp.bind(this)}
        />
      </div>
    )
  }
}