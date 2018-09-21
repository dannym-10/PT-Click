import React, { Component } from 'react'
import SVGInline from 'svg-inline-react'
import logo from '@icons/logo.svg'
import './Banner.scss'

class Banner extends Component {
  render () {
    return (
      <div styleName='banner-wrapper'>
        <div styleName='banner-top'>
          <div styleName='banner-logo'>
            <SVGInline src={logo} styleName='logo' />
          </div>
          <div styleName='banner-name'>
            <p>PT Click</p>
          </div>
        </div>
        <div styleName='banner-bottom'>
          <div styleName='banner-slogan'>
            <p>Your online personal trainer</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
