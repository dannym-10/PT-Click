import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Exercise from '@components/Exercise'
import store from '@stores/ExerciseStore'
import { withRouter } from 'react-router'
import './ExercisePage.scss'

@withRouter
@observer
class ExercisePage extends Component {
  componentDidMount () {
    if (!store.exercises.length) {
      store.fetchExercises()
    }
  }

  render () {
    const { params } = this.props.match
    const exercise = store.exercises.find(exercise => {
      return exercise.id === params.name
    })

    if (!exercise) {
      return (
        <p>Loading exercise...</p>
      )
    }

    return <Exercise {...exercise} />
  }
}

export default ExercisePage
