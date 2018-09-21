import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './ExerciseOverview.scss'

class ExerciseOverview extends Component {
  render () {
    const { title, url, image } = this.props

    return (
      <Link styleName='item' to={url}>
        <div styleName='item-content'>
          {title}
        </div>
        <div styleName='item-image'>
          <img src={image} alt='img' />
        </div>
      </Link>
    )
  }
}

ExerciseOverview.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string
}

export default ExerciseOverview
