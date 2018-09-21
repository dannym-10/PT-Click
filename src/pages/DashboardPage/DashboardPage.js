import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import { AreaChart } from 'react-easy-chart'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import capitaliseFirstLetter from '@helpers/capitaliseFirstLetter'
import UserStore from '@stores/UserStore'
import Button from '@components/Button'
import Input from '@components/Input'
import WorkoutForm from '@components/WorkoutForm'
import './DashboardPage.scss'

@withRouter
@observer
class DashboardPage extends Component {
  @observable weight = ''
  @observable height = ''

  @action onInputChange (property, event) {
    this[property] = event.target.value
  }
  @action onWeightChange = (event) => {
    this.weight = event.target.value
  }

  updateInfo = (event) => {
    event.preventDefault()
    const data = {}
    if (this.height !== '') {
      data.height = parseInt(this.height)
    }
    if (this.weight !== '') {
      data['$push'] = {
        weight: {
          date: Date.now(),
          value: this.weight
        }
      }
    }
    UserStore.update(data).then(() => {
      this.weight = ''
      this.height = ''
      document.getElementById('user-form').reset()
    }).catch(() => {
      this.weight = ''
      this.height = ''
      document.getElementById('user-form').reset()
    })
  }

  renderCurrentWeight () {
    const { weight } = UserStore.user
    const mostRecent = weight[weight.length - 1] || {} 
    return mostRecent.value
  }

  renderCurrentWeightDate () {
    const { weight } = UserStore.user
    const mostRecent = weight[weight.length - 1] || {} 
    const date = new Date(mostRecent.date || Date.now())
    const formattedDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
    return formattedDate
  }

  renderWorkouts () {
    if (!UserStore.user.workouts || !UserStore.user.workouts.length) {
      return <p styleName='no-workouts'>You have no workouts!</p>
    }

    return UserStore.user.workouts.map((workout, index) => {
      return (
        <ul styleName='workout-list'>
          <h3 styleName='workout-name'>Workout {index + 1}</h3>
          {workout.map((exercise) => {
            return (
              <li styleName='workout-item'>
                <p>{exercise.name}</p>
                <Link to={`/exercises/${exercise.primaryMuscle.toLowerCase()}`} styleName='muscle-link'>
                  {exercise.primaryMuscle}
                </Link>
              </li>
            )
          })}
        </ul>
      )
    })
  }

  render () {
    // move to componentDidMount ??
    // causing dashboard bug
    const isLoggedIn = UserStore.user

    if (!isLoggedIn) {
      this.props.history.push('/login')
      return null
    }

    return (
      <div styleName='wrapper'>
        <h1 styleName='welcome-user'>
          Welcome, {capitaliseFirstLetter(UserStore.user.firstName)}
        </h1>
        <h3 styleName='user-info'>You are <strong>{UserStore.user.height}cm</strong> tall and weight in at <strong>{this.renderCurrentWeight()}kg</strong></h3>
        <p styleName='taken-on'>Last upda ted {this.renderCurrentWeightDate()}</p>
        <div styleName='info'>
          <form styleName='update-user' onSubmit={this.updateInfo} id='user-form'>
            <label htmlFor='newHeight'>Enter new height</label>
            <Input type='number' placeholder='183cm...' onChange={this.onInputChange.bind(this, 'height')} />
            <label htmlFor='newWeight'>Enter new weight</label>
            <Input type='number' placeholder='89kg...' onChange={this.onWeightChange} />
            <Button type='submit'>
              Update Details
            </Button>
          </form>
          <div styleName='chart'>
            <AreaChart
              axes
              width={300}
              height={300}
              axisLabels={{x: 'Dates', y: 'Weight (kg)'}}
              data={[
                [
                  { x: 1, y: 87 },
                  { x: 2, y: 88 },
                  { x: 3, y: 85 },
                  { x: 4, y: 84 },
                  { x: 5, y: 85 },
                  { x: 6, y: 84 }
                ], [
                  { x: 1, y: 57 },
                  { x: 2, y: 55 },
                  { x: 3, y: 64 },
                  { x: 4, y: 57 },
                  { x: 5, y: 74 },
                  { x: 6, y: 59 }
                ]
              ]}
            />
          </div>
        </div>
        <div styleName='content-workouts'>
          <h2 styleName='user-info'>
            Your workout schedule.
          </h2>
          <div styleName='user-workouts'>
            {this.renderWorkouts()}
          </div>
          <br />
          <h2 styleName='user-info'>
            Generate a workout.
          </h2>
          <WorkoutForm />
        </div>
      </div>
    )
  }
}

export default DashboardPage
