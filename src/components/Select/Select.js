import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Select.scss'

class Select extends Component {
  render () {
    const { options, onChange } = this.props

    return (
      <select styleName='select' onChange={onChange}>
        {options.map((option, index) => {
          return <option key={option.value + index} value={option.value}>{option.text || option.value}</option>
        })}
      </select>
    )
  }
}

Select.propTypes = {
  options: PropTypes.array
}

export default Select
