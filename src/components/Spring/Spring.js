import React, { Component } from 'react'
import './Spring.scss'

class Spring extends Component {
  render () {
    return (
      <div styleName='wrapper'>
        {this.props.children}
      </div>
    )
  }
}

export default Spring
