import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

class CurrentCity extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className="current-city">
        <span>
          {this.props.cityName}
          <span className="current-city-grey">
            GPS定位
          </span>
        </span>
      </div>
    )
  }
}

export default CurrentCity