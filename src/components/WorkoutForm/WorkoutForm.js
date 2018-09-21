import React, { Component } from 'react'
import { action } from 'mobx'
import { observer } from 'mobx-react'
import Button from '@components/Button'
import Select from '@components/Select'
import store from '@stores/ExerciseStore'
import UserStore from '@stores/UserStore'
import './WorkoutForm.scss'

@observer
class WorkoutForm extends Component {
  componentDidMount() {
    if (!store.exercises.length) {
      store.fetchExercises()
    }
  }
  
  @action onInputChange (property, event) {
    store.workoutData[property] = event.target.value
  }

  generateWorkout = (event) => {
    event.preventDefault()
    const workouts = store.generateWorkout()

    UserStore.update({
      workouts: workouts
    }).then(() => {
      document.getElementById('user-form').reset()
    }).catch(() => {
      document.getElementById('user-form').reset()
    })
  }

  render () {
    return (
      <form onSubmit={this.generateWorkout} styleName='form-wrapper'>
        <Select onChange={this.onInputChange.bind(this, 'workoutType')} options={[{
            text: 'Pick focus...'
          }, {
            text: 'Weight Loss',
            value: 'weightloss'
          }, {
            text: 'Mixed',
            value: 'mixed'
          }, {
            text: 'Strength',
            value: 'strength'
          }]}
        />
        <Select onChange={this.onInputChange.bind(this, 'workoutDays')} options={[{
            text: 'Number of days...'
          }, {
            text: 1,
            value: 1
          }, {
            text: 2,
            value: 2
          }, {
            text: 3,
            value: 3
          }, {
            text: 4,
            value: 4
          }, {
            text: 5,
            value: 5
          }, {
            text: 6,
            value: 6
          }]}
        />
        <Button>
          Create Workout
        </Button>
      </form>
    )
  }
}

export default WorkoutForm
