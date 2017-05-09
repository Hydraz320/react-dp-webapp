import React, {Component} from 'react'
import {render} from 'react-dom'

class List extends Component {
  constructor(props) {
    super(props)
  }

  _clickHandler(value) {
    let history = this.props.history
    history.push(`/detail/${value}`)
  }

  render() {
    const arr = [1, 2, 3]
    return (
      <div>
        <h3>List</h3>
        <ul>
          {
            arr.map((item, index) => {
              return <li key={index} onClick={this._clickHandler.bind(this, item)}>JS jump to /detail/{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default List