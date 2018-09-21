import React, { Component } from 'react'
import SVGInline from 'svg-inline-react'
import Spring from '@components/Spring'
import facebook from '@icons/facebook.svg'
import instagram from '@icons/instagram.svg'
import linkedin from '@icons/linkedin.svg'
import twitter from '@icons/twitter.svg'
import './Footer.scss'

class Footer extends Component {
  render () {
    return (
      <div styleName='wrapper'>
        <Spring>
          <div styleName='top-container'>
            <div styleName='top-left-container'>
              <div styleName='info-logo'>
                {/* <img src=''/> */}
              </div>
              <div styleName='info-about'>
                <p styleName='info-about-details'>Danny Moss Final Year Project</p>
                <p styleName='info-about-details'>Nottingham Trent University</p>
              </div>
            </div>
            <div styleName='top-right-container'>
              <div styleName='social-container'>
                <a href='www.facebook.com' styleName='social-icon'>
                  <SVGInline src={facebook} />
                </a>
                <a href='www.twiter.com' styleName='social-icon'>
                  <SVGInline src={twitter} />
                </a>
                <a href='www.instagram.com' styleName='social-icon'>
                  <SVGInline src={instagram} />
                </a>
                <a href='www.linkedin.com' styleName='social-icon'>
                  <SVGInline src={linkedin} />
                </a>
              </div>
            </div>
          </div>
          <hr styleName='separator-line' />
          <div styleName='info-copyright'>
            <p styleName='info-copyright-content'>© Danny Moss 2018</p>
          </div>
        </Spring>
      </div>
    )
  }
}

export default Footer
