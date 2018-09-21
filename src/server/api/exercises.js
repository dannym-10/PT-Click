import db from '../db'

const exercises = (req, res) => {
  if (req.params.exercise) {
    res.send({
      message: `This will return ${req.params.exercise} exercises.`
    })
  } else {
    db.collection('exercises').find().toArray((error, exercises) => {
      if (error) {
        console.warn(error)
      }
      console.info('found exercises', exercises)
      res.send(exercises)
    })
  }
}

export default exercises
