import { Strategy } from 'passport-local'
import User from '../db/models/user'

const strategy = new Strategy(
  {
    usernameField: 'username' // not necessary, DEFAULT
  },
  (username, password, done) => {
    console.info('Local auth...')
    User.findOne({ 'local.username': username }, (err, userMatch) => {
      if (err) {
        console.log(err)
        return done(err)
      }
      if (!userMatch) {
        console.log('No user match')
        return done(null, false, { message: 'Incorrect username' })
      }
      if (!userMatch.checkPassword(password)) {
        console.log('Badd password match')
        return done(null, false, { message: 'Incorrect password' })
      }
      console.info('logging in')
      return done(null, userMatch)
    })
  }
)

export default strategy
