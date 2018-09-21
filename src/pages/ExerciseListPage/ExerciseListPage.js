import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router'
import store from '@stores/ExerciseStore'
import toURL from '@helpers/toURL'
import ExerciseOverview from '@components/ExerciseOverview'
import capitaliseFirstLetter from '@helpers/capitaliseFirstLetter'
import './ExerciseListPage.scss'

@withRouter
@observer
class ExerciseListPage extends Component {
  componentDidMount () {
    if (!store.exercises.length) {
      store.fetchExercises()
    }
  }

  renderExerciseOverviews (list) {
    return list.map(exercise => {
      const url = this.props.match.url + '/' + toURL(exercise.name.toLowerCase())
      return (
        <ExerciseOverview key={exercise.id} url={url} title={capitaliseFirstLetter(exercise.name)} image='https://www.muscleandperformance.com/.image/c_limit%2Ccs_srgb%2Cq_80%2Cw_460/MTQ1MzY2OTYxOTM3MTk2NTk5/image-placeholder-title.webp' />
      )
    })
  }

  render () {
    const { url, params } = this.props.match
    const list = store.exercises.filter(exercise => {
      return exercise.primaryMuscle.toLowerCase() === params.exercise || exercise.secondaryMuscle.toLowerCase() === params.exercise
    })

    return (
      <div styleName='wrapper'>
        <div styleName='content'>
          {this.renderExerciseOverviews(list)}
        </div>
      </div>
    )
  }
}

export default ExerciseListPage
