import React, { Component } from 'react'
import './Button.scss'

class Button extends Component {
  render () {
    const { type, children } = this.props

    return (
      <button type={type} styleName='button' >
        <span styleName='focus-border'>
          {children}
        </span>
      </button>
    )
  }
}

Button.defaultProps = {
  type: 'text'
}

export default Button
