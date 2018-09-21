import { observable } from 'mobx'
import UserStore from '@stores/UserStore'

class NavigationStore {
  sharedItems = [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'Exercises',
      url: '/exercises'
    },
    {
      title: 'Workouts',
      url: '/workouts'
    }
  ]
  authenticatedItems = [
    {
      title: 'Dashboard',
      url: '/dashboard'
    },
    {
      title: 'Logout',
      url: '/',
      onClick: UserStore.logout
    }
  ]
  nonAuthenitcatedItems = [
    {
      title: 'Login',
      url: '/login'
    }
  ]

  get items () {
    if (UserStore.user) {
      return [
        ...this.sharedItems,
        ...this.authenticatedItems
      ]
    }

    return [
      ...this.sharedItems,
      ...this.nonAuthenitcatedItems
    ]
  }
}

const store = new NavigationStore()
export default store
