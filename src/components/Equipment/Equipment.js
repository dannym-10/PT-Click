import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'svg-inline-react'
import Dumbbell from '@icons/dumbbell.svg'
import EZbar from '@icons/EZbar.svg'
import Kettlebell from '@icons/kettlebell.svg'
import Barbell from '@icons/barbell.svg'
import MedicineBall from '@icons/medicineball.svg'
import Plate from '@icons/plate.svg'
import './Equipment.scss'

const equipmentItems = {
  dumbbell: Dumbbell,
  barbell: Barbell,
  ezbar: EZbar,
  kettlebell: Kettlebell,
  plates: Plate,
  medicineball: MedicineBall,
  machine: MedicineBall
}

class Equipment extends Component {
  render () {
    const { item } = this.props
    let piece = equipmentItems[item]
    return (
      <div styleName='wrapper'>
        <div styleName={`${item} svg-item`}>
          <SVGInline src={piece} />
        </div>
      </div>
    )
  }
}

Equipment.propTypes = {
  item: PropTypes.oneOf(['dumbbell', 'barbell', 'ezbar', 'kettlebell', 'plates', 'medicineball', 'machine'])
}
export default Equipment
