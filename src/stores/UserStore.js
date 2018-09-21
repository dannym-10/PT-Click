import { action, observable, toJS, computed } from 'mobx'

class UserStore {
  @observable user = null
  @observable loginData = {
    username: '',
    password: ''
  }
  @observable registrationData = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    weight: {
      date: Date.now(),
      value: ''
    },
    height: ''
  }

  @action login () {
    return new Promise((resolve, reject) => {
      fetch('/login', {
        method: 'post',
        body: JSON.stringify(toJS(this.loginData)),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
        .then((res) => res.json())
        .then((data) => {
          console.info('Data?', data)
          if (data.username) {
            this.user = data
            resolve(data)
          } else {
            this.user = null
            reject()
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  @computed get validRegistrationData () {
    return (
      this.registrationData && 
      this.registrationData.firstName !== '' &&
      this.registrationData.lastName !== '' &&
      this.registrationData.username !== '' &&
      this.registrationData.password !== '' &&
      this.registrationData.height !== '' &&
      this.registrationData.weight.value !== ''
    )
  }

  @action register () {
    return new Promise((resolve, reject) => {
      if (this.validRegistrationData) {
        fetch('/register', {
          method: 'post',
          body: JSON.stringify(toJS(this.registrationData)),
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        })
          .then((res) => res.json())
          .then((data) => {
            console.info('Data?', data)
            if (data) {
              resolve(data)
            } else {
              this.user = null
              reject()
            }
          })
          .catch((error) => {
            reject(error)
          })
      } else {
        reject(new Error('Please fill out all fields'))
      }
    })
  }

  @action logout () {
    this.user = null
  }

  @action update (newUserData) {
    return new Promise((resolve, reject) => {
      fetch('/user', {
        method: 'post',
        body: JSON.stringify(toJS(newUserData)),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
        .then((res) => res.json())
        .then((data) => {
          this.user = data // updated user
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

const store = new UserStore()
export default store
