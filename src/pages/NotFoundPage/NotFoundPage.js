import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NotFoundPage.scss'
import SVGInline from 'svg-inline-react'
import BrokenWeight from '@icons/brokenWeight.svg'

class NotFoundPage extends Component {
  render () {
    return (
      <div styleName='wrapper'>
        <div styleName='page-not-found'>
          404 Page not Found
        </div>
        <div styleName='weight'>
          <SVGInline src={BrokenWeight} />
        </div>
        <Link to='/' styleName='return-link'>
          Return to the Home Page
        </Link>
      </div>
    )
  }
}

export default NotFoundPage
