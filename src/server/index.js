import express from 'express'
import bodyParser from 'body-parser'
import template from './template'
import path from 'path'
import expressSession from 'express-session'
import mongo from 'connect-mongo'
import passport from 'passport'
import router from './router'
import db from './db'

const isLocal = process.env.NODE_ENV === 'local'
const app = express()
const MongoStore = mongo(expressSession)
const session = expressSession({
  secret: process.env.APP_SECRET || 'this is the default passphrase',
  store: new MongoStore({ mongooseConnection: db }),
  resave: true,
  saveUninitialized: false
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/assets', express.static(path.join(process.argv[1], '../assets')))

app.use(session)
app.use(passport.initialize())
app.use(passport.session())
app.use(router)

if (isLocal) {
  const webpack = require('./config/webpack')

  app.use(webpack.webpackDev)
  app.use(webpack.webpackHot)
}

app.get('*', (req, res) => {
  res.send(template)
})

app.listen(8000, 'localhost', (err) => {
  if (err) {
    console.warn(err)
  }
})
