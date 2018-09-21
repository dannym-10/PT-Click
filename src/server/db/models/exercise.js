import mongoose from 'mongoose'
const Schema = mongoose.Schema
mongoose.promise = Promise

const exerciseSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    unique: true
  },
  primaryMuscle: {
    type: String
  },
  secondaryMuscle: {
    type: String
  },
  preparation: {
    type: String,
    unique: false
  },
  execution: {
    type: String,
    unique: false
  },
  grips: [
    {
      type: String,
      unique: false
    }
  ],
  equipment: [
    {
      type: String,
      unique: false
    }
  ],
  grade: {
    type: Number
  }
})

// Create reference to exercises & export
const Exercise = mongoose.model('Exercise', exerciseSchema)

// export the schema so we can use it in other models
export {
  exerciseSchema
}
export default Exercise
