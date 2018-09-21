import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import { Link, withRouter } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import set from 'lodash.set'
import Input from '@components/Input'
import Button from '@components/Button'
import UserStore from '@stores/UserStore'
import styles from './LoginPage.scss'

@withRouter
@observer
class LoginPage extends Component {
  @observable error = null
  @observable selectedIndex = 0
  @observable registrationSuccess = false

  componentDidMount () {
    this.redirectIfLoggedIn()
  }

  redirectIfLoggedIn () {
    if (UserStore.user) {
      this.props.history.push('/dashboard')
    }
  }

  @action setSelectedTab = value => {
    this.selectedIndex = value
    this.error = null
  }

  @action login = event => {
    event.preventDefault()

    UserStore.login()
      .then(data => this.redirectIfLoggedIn())
      .catch(err => {
        console.warn(err)
        this.error = 'Invalid username or password.'
      })
  }

  @action register = event => {
    event.preventDefault()

    UserStore.register()
      .then(data => {
        this.registrationSuccess = true
        console.info('Registration Successful', data)
      })
      .catch(err => {
        console.warn(err)
        this.error = 'Please fill out all fields'
      })
  }

  onInputChange (dataToUpdate, input, event) {
    // if (input.includes('.')) {
      
    // }
    // UserStore[dataToUpdate][input] = event.target.value
    set(UserStore[dataToUpdate], input, event.target.value)
  }

  renderRegistrationForm () {
    if (!this.registrationSuccess) {
      return (
        <form onSubmit={this.register} styleName='form-wrapper'>
          {this.renderError(this.error)}
          <Input type='text' placeholder='Username' onChange={this.onInputChange.bind(this, 'registrationData', 'username')} />
          <Input type='password' placeholder='Password' onChange={this.onInputChange.bind(this, 'registrationData', 'password')} />
          <Input type='text' placeholder='First Name' onChange={this.onInputChange.bind(this, 'registrationData', 'firstName')} />
          <Input type='text' placeholder='Last Name' onChange={this.onInputChange.bind(this, 'registrationData', 'lastName')} />
          <Input type='number' placeholder='Weight (KG)' onChange={this.onInputChange.bind(this, 'registrationData', 'weight.value')} />
          <Input type='number' placeholder='Height (CM)' onChange={this.onInputChange.bind(this, 'registrationData', 'height')} />
          <Button type='submit'>
            Register
          </Button>
        </form>
      )
    }
    return (
      <div styleName='registration-success'>
        <p styleName='success'>Registration Successful</p>
        <a onClick={() => this.setSelectedTab(0)} >Login</a>
      </div>
    ) 
  }

  renderError (error) {
    if (error) {
      return (
        <p styleName='error'>{error}</p>
      )
    }
  }

  render () {
    return (
      <div styleName='wrapper'>
        <Tabs styleName='tabs' selectedTabClassName={styles.selected} selectedIndex={this.selectedIndex} onSelect={this.setSelectedTab} >
          <TabList styleName='tab-list'>
            <Tab styleName='tab'>Login</Tab>
            <Tab styleName='tab'>Register</Tab>
          </TabList>
          <TabPanel>
            <form onSubmit={this.login}  styleName='form-wrapper'>
              {this.renderError(this.error)}
              <Input type='text' placeholder='Username' onChange={this.onInputChange.bind(this, 'loginData', 'username')} />
              <Input type='password' placeholder='Password' onChange={this.onInputChange.bind(this, 'loginData', 'password')} />
              <Button type='submit'>
                Login
              </Button>
            </form>
          </TabPanel>
          <TabPanel>
            {this.renderRegistrationForm()}
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default LoginPage
