import passport from 'passport'
import LocalStrategy from './localStrategy'
import User from '../db/models/user'

passport.serializeUser((user, done) => {
  done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
  User.findOne(
    { _id: id },
    (err, user) => {
      if (err) console.warn(err)
      done(null, user)
    }
  )
})

passport.use(LocalStrategy)

export default passport
