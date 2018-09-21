import React, { Component } from 'react'
import './Input.scss'

class Input extends Component {
  render () {
    const { type, placeholder, initialValue, value, onChange } = this.props

    return (
      <div styleName='wrapper'>
        <input type={type} placeholder={placeholder} defaultValue={initialValue} onChange={onChange} value={value} styleName='input' />
        <span styleName='focus-border'>
          <i />
        </span>
      </div>
    )
  }
}

Input.defaultProps = {
  type: 'text'
}

export default Input
