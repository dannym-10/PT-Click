import { observable, action, computed } from 'mobx'

class ExerciseStore {
  @observable exercises = []
  @observable workoutData = { 
    workoutDays: '',
    workoutType: ''
  }

  @action fetchExercises () {
    fetch('/api/exercises')
      .then(res => res.json())
      .then(data => {
        this.exercises = data
      })
      .catch(error => {
        console.warn(error)
      })
  }

  @computed get categories () {
    return this.exercises.map(exercise => {
      return {
        title: exercise.primaryMuscle,
        url: exercise.primaryMuscle.toLowerCase()
      }
    }).filter((exercise, index, self) => (
      index === self.findIndex(sub => (
        sub.title === exercise.title && sub.url === exercise.url
      ))
    ))
  }

  @action generateWorkout = (event) => {
    const { workoutDays, workoutType } = this.workoutData 
    const workouts = []

    for (let i = 0; i < parseInt(workoutDays); i++) {
      const exercises = []
      const numberOfExercises = this.exercises.length
      let points = 0
      let cardioCapacity = workoutType === 'weightloss' ? 2 : 1
      let strengthCapacity = workoutType === 'strength' ? 2 : 1

      while (points < 28) {
        const exercise = this.exercises[Math.floor(Math.random() * numberOfExercises)]

        if (exercise.grade === 6 && !cardioCapacity) {
          continue
        } else if (exercise.grade === 5 && !strengthCapacity) {
          continue
        } else {
          if (exercise.grade === 6) {
            cardioCapacity--
          } else if (exercise.grade === 5) {
            strengthCapacity--
          }

          points += exercise.grade
          exercises.push(exercise)
        }
      }
      workouts.push(exercises)
    }
    return workouts
  }
}

const store = new ExerciseStore()
export default store
