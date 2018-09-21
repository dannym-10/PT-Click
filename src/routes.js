import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '@pages/HomePage'
import ExerciseGroupPage from '@pages/ExerciseGroupPage'
import ExerciseListPage from '@pages/ExerciseListPage'
import ExercisePage from '@pages/ExercisePage'
import WorkoutPage from '@pages/WorkoutPage'
import LoginPage from '@pages/LoginPage'
import TemplatePage from '@pages/TemplatePage'
import NotFoundPage from '@pages/NotFoundPage'
import DashboardPage from '@pages/DashboardPage'

const createRoutes = () => {
  return (
    <TemplatePage>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/exercises' component={ExerciseGroupPage} exact />
        <Route path='/exercises/:exercise' component={ExerciseListPage} exact />
        <Route path='/exercises/:exercise/:name' component={ExercisePage} />
        <Route path='/workouts' component={WorkoutPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </TemplatePage>
  )
}

export default createRoutes
