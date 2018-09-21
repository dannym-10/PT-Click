import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import store from '@stores/NavigationStore'
import UserStore from '@stores/UserStore'
import Banner from '@components/Banner'
import './Header.scss'

@observer
class Header extends Component {
  @observable menuActive = false

  toggleMenu = () => {
    this.menuActive = !this.menuActive
  }

  renderNavigationItems () {
    return store.items.map((value, index) => {
      return (
        <li styleName='navigation-content' key={value.url + value.title + index}>
          <Link to={value.url} key={value.title} styleName='navigation-item' onClick={(event) => {
            if (value.onClick) {
              UserStore.logout()//temp fix
              value.onClick(event)
            }
            this.toggleMenu()
          }}>
            {value.title}
          </Link>
        </li>
      )
    })
  }

  render () {
    return (
      <div styleName='wrapper'>
        <input type='checkbox' id='menu' name='menu' styleName='mobile-nav-button' checked={this.menuActive} />
        <label htmlFor='menu' styleName='burger' onClick={this.toggleMenu} />
        <div styleName='main'>
          <ul styleName='navigation'>
            {this.renderNavigationItems()}
          </ul>
        </div>
        <Banner />
      </div>
    )
  }
}

export default Header
