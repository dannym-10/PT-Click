import React, { Component } from 'react'
import SVGInline from 'svg-inline-react'
import NarrowGrip from '@icons/narrowGrip.svg'
import NormalGrip from '@icons/normalGrip.svg'
import WideGrip from '@icons/wideGrip.svg'
import './Grip.scss'

const gripItems = {
  narrow: NarrowGrip,
  medium: NormalGrip,
  wide: WideGrip
}

class Grips extends Component {
  render () {
    const { item } = this.props
    let piece = gripItems[item]
    return (
      <div styleName='wrapper'>
        <div styleName='grip-type'>
          <SVGInline src={piece} />
        </div>
      </div>
    )
  }
}

export default Grips
