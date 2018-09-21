// setup connection with Mongo
import mongoose from 'mongoose'
mongoose.Promise = global.Promise
const MONGO_URL = 'mongodb://127.0.0.1:27017/danny'

mongoose.connect(MONGO_URL) // local mongo url for us

const db = mongoose.connection
db.on('error', err => {
  console.log(`There was an error connecting to the database: ${err}`)
})

db.once('open', () => {
  console.log(`Connected to Mongo: ${MONGO_URL}`)

  // if (process.env.NODE_ENV === 'local') {
  //   console.info('Attempting to populate data...')
  //   const Exercise = require('./models/exercise').default
  //   const mockExercises = require('../../mocks/exercises.json')

  //   db.createCollection('exercises', (error, collection) => {
  //     console.warn(error)
  //     mockExercises.forEach(exercise => {
  //       const instance = new Exercise(exercise)
  //       db.collection('exercises').insert(instance)
  //     })
  //     console.info('Exercises addedd')
  //   })
  // }
})

export default db
