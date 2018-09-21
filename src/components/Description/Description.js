import React, { Component } from 'react'
import './Description.scss'

class Description extends Component {
  render () {
    return (
      <div styleName='wrapper'>
        <div styleName='exercise-info'>
          <div styleName='title'>
            Preperation
          </div>
          <div styleName='info'>
            This is how you prepare  for the exerise
          </div>
        </div>
        <div styleName='exercise-info'>
          <div styleName='title'>
            Execution
          </div>
          <div styleName='info'>
            This is how you complete the exercsise
          </div>
        </div>
      </div>
    )
  }
}

export default Description
