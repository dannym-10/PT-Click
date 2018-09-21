import React, {Component} from 'react'
import './HomePage.scss'
import SVGInline from 'svg-inline-react'
import { Link } from 'react-router-dom'
import ExerciseHomepage from '@icons/exerciseHomepage.svg'
import WorkoutHomepage from '@icons/workoutHomepage.svg'

class HomePage extends Component {
  render () {
    return (
      <div styleName='wrapper'>
        <div styleName='exercise-workout-wrapper'>
          <Link to='/exercises' styleName='content'>
            <div styleName='exercises'>
              <div styleName='title'>View exercises</div>
              <div styleName='svg-wrapper'>
                <SVGInline src={ExerciseHomepage} />
              </div>
            </div>
          </Link>
          <Link to='/workouts' styleName='content'>
            <div styleName='workouts'>
              <div styleName='title'>View workouts</div>
              <div styleName='svg-wrapper'>
                <SVGInline src={WorkoutHomepage} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default HomePage
