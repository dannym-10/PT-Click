import React, { Component } from 'react'
import './WorkoutPage.scss'
import store from '@stores/WorkoutStore'
import { Link } from 'react-router-dom'

class WorkoutPage extends Component {
  renderExercises (workout) {
    return workout.exercises.map(exercise => {
      return (
        <li styleName='workout-item'>
          <p>{exercise.name}</p>
          <Link to={`/exercises/${exercise.primaryMuscle.toLowerCase()}`} styleName='muscle-link'>
            {exercise.primaryMuscle}
          </Link>
        </li>
      )
    })
  }

  renderWorkouts () {
    return store.workouts.map(workout => {
      return (
        <ul styleName='workout-list'>
          <h3 styleName='workout-name'>{workout.name}</h3>
          {this.renderExercises(workout)}
        </ul>
      )
    })
  }

  render () {
    return (
      <div styleName='wrapper'>
        <h1 styleName='page-title'>Find a Workout</h1>
        <div styleName='workouts'>
          {this.renderWorkouts()}
        </div>
      </div>
    )
  }
}

export default WorkoutPage
