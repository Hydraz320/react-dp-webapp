import React, {Component} from 'react'
import {render} from 'react-dom'

const Detail = ({match}) => {
  console.log(match)
  return <div>Detail{match.params.id}</div>
}

export default Detail