import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import toURL from '@helpers/toURL'
import PropTypes from 'prop-types'
import Equipment from '@components/Equipment'
import Grip from '@components/Grip'
import capitaliseFirstLetter from '@helpers/capitaliseFirstLetter'
import './Exercise.scss'

class Exercise extends Component {
  renderGrips (grip) {
    return <Grip key={grip} item={grip} />
  }

  renderWeightType (equipment) {
    if (equipment === 'ez bar') {
      equipment = 'ezbar'
    } else if (equipment === 'kettle bell') {
      equipment = 'kettlebell'
    } else if (equipment === 'medicine ball') {
      equipment = 'medicineball'
    }
    return <Equipment key={equipment} item={equipment.trim().toLowerCase()} />
  }

  render () {
    const { grips, equipment, name, primaryMuscle, secondaryMuscle, preparation, execution, image, video } = this.props

    return (
      <div styleName='wrapper'>
        <div styleName='image-container'>
          <img src={image} alt={name} />
        </div>
        <div styleName='information-container'>
          <h1 styleName='name'>{capitaliseFirstLetter(name)}.</h1>
          <h3 styleName='primary-muscle'>
            Focuses on <Link to={`/exercises/${toURL(primaryMuscle)}`} styleName='primary-muscle-link'>{primaryMuscle}</Link>.
          </h3>
          <div styleName='muscle-wrapper'>
            <div styleName='muscle-group-item'>{primaryMuscle}</div>
            <div styleName='muscle-group-item'>{secondaryMuscle}</div>
          </div>
          <h4 styleName='subheading'>Preparation</h4>
          <p styleName='description'>{preparation}</p>
          <h4 styleName='subheading'>Execution</h4>
          <p styleName='description'>{execution}</p>
          <div styleName='grips'>{grips.map(this.renderGrips)}</div>
          <div styleName='weights'>{equipment.map(this.renderWeightType)}</div>
        </div>
      </div>
    )
  }
}

Exercise.propTypes = {
  name: PropTypes.string.isRequired,
  primaryMuscle: PropTypes.string.isRequired,
  secondaryMuscle: PropTypes.string.isRequired,
  preparation: PropTypes.string.isRequired,
  execution: PropTypes.string.isRequired,
  grips: PropTypes.arrayOf(PropTypes.string).isRequired,
  equipment: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  video: PropTypes.string
}

Exercise.defaultProps = {
  image: 'https://www.building-muscle101.com/images/negatives-for-bench-press-main.jpg'
}

export default Exercise
