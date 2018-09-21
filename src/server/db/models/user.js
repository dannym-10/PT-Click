import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { exerciseSchema as Exercise } from './exercise'
const Schema = mongoose.Schema
mongoose.promise = Promise

const userSchema = new Schema({
  firstName: {
    type: String,
    unique: false
  },
  lastName: {
    type: String,
    unique: false
  },
  weight: [
    {
      date: {
        type: Number
      },
      value: {
        type: String,
        unique: false
      }
    }
  ],
  height: {
    type: Number,
    unique: false
  },
  workouts: [
    [
      {
        type: Exercise
      }
    ]
  ],
  favourites: [
    {
      type: String
    }
  ],
  local: {
    username: {
      type: String,
      unique: false,
      required: false
    },
    password: {
      type: String,
      unique: false,
      required: false
    }
  }
})

// Define schema methods
userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.local.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

userSchema.pre('save', function (next) {
  if (!this.local.password) {
    next()
  } else {
    this.local.password = this.hashPassword(this.local.password)
    next()
  }
})

// Create reference to User & export
const User = mongoose.model('User', userSchema)
export default User
