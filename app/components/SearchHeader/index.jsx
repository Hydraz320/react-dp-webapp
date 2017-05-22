import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchInput from 'components/SearchInput'

import './index.less'

class SearchHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div className="search-header-container">
        <div className="search-back" onClick={this._clickHandle.bind(this)}>
          <svg className="icon icon-yuyin" aria-hidden="true">
            <use xlinkHref="#icon-yuyin"></use>
          </svg>
        </div>
        <div className="input-container">
          <svg className="icon icon-search" aria-hidden="true">
            <use xlinkHref="#icon-search"></use>
          </svg>
          <SearchInput value={this.props.keyword || ''} enterHandle={this._enterHandle.bind(this)}/>
        </div>
      </div>
    )
  }

  _clickHandle() {
    this.props.history.goBack()
  }

  _enterHandle(value) {
    this.props.history.push('/search/all/' + encodeURIComponent(value))
  }
}

export default SearchHeader