import React, { Component } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Spring from '@components/Spring'
import './TemplatePage.scss'

class TemplatePage extends Component {
  render () {
    return (
      <div>
        <Header />
        <div styleName='padding'>
          <Spring>
            {this.props.children}
          </Spring>
        </div>
        <Footer />
      </div>
    )
  }
}

export default TemplatePage
