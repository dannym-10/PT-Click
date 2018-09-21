import express from 'express'
import passport from './passport'
import exercises from './api/exercises'
import login from './api/auth/login'
import register from './api/auth/register'
import logout from './api/auth/logout'
import user from './api/auth/user'
import updateUser from './api/auth/update-user'

const router = express.Router()

router.post('/login', passport.authenticate('local', { session: true }), login)
router.post('/logout', logout)
router.post('/register', register)
router.get('/user', user)
router.post('/user', updateUser)
router.get('/api/exercises/:exercise?', exercises)

export default router
