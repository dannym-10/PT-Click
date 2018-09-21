import { observable } from 'mobx'

class WorkoutStore {
  workouts = [
    {
      name: 'Chest and Triceps',
      exercises: [
        {
          name: "Barbell Bench Press",
          primaryMuscle: "chest"
        },
        {
          name: "Incline Dumbell Press",
          primaryMuscle: "chest"
        },
        {
          name: "Skull Crushers",
          primaryMuscle: "triceps",
        },
        {
          name: "Cable Flys",
          primaryMuscle: "chest"
        },
        {
          name: "Triceps Pushdown - v bar",
          primaryMuscle: "triceps"
        },
        {
          name: "Triceps Pushdown - Straignt bar",
          primaryMuscle: "triceps"
        }
      ] 
    },
    {
      name: 'Legs and Shoulders',
      exercises: [
        {
          name: "Squats",
          primaryMuscle: "quads"
        },
        {
          name: "Leg press",
          primaryMuscle: "quads"
        },
        {
          name: "Calf Extensions",
          primaryMuscle: "calves",
        },
        {
          name: "Shoulder Press",
          primaryMuscle: "shoulders"
        },
        {
          name: "Standing Military Press",
          primaryMuscle: "shoulders"
        },
        {
          name: "Side Lateral Raises",
          primaryMuscle: "shoulders"
        }
      ]
    },
    {
      name: 'Back',
      exercises: [
        {
          name: "Deadlift",
          primaryMuscle: "back"
        },
        {
          name: "Latt Pulldown",
          primaryMuscle: "back"
        },
        {
          name: "Barbell Row",
          primaryMuscle: "back",
        },
        {
          name: "Pullups",
          primaryMuscle: "back"
        },
        {
          name: "Hammer Curls",
          primaryMuscle: "biceps"
        },
        {
          name: "Preacher Curl",
          primaryMuscle: "biceps"
        }
      ]
    },
    {
      name: 'Latts attack',
      exercises: [
        {
          name: "Lateral raises",
          primaryMuscle: "lats"
        },
        {
          name: "Pull ups",
          primaryMuscle: "lats"
        },
        {
          name: "Lat pulldown",
          primaryMuscle: "lats",
        },
        {
          name: "Underhand cable pulldowns",
          primaryMuscle: "lats"
        },
        {
          name: "Straignt-arm pulldown",
          primaryMuscle: "lats"
        }
      ]
    },
    {
      name: 'Arms',
      exercises: [
        {
          name: "Skull crushers",
          primaryMuscle: "triceps"
        },
        {
          name: "seated barbell curls",
          primaryMuscle: "biceps"
        },
        {
          name: "Triceps pushdown - v bar",
          primaryMuscle: "triceps"
        },
        {
          name: "Hammer curls",
          primaryMuscle: "biceps"
        },
        {
          name: "Kneeling cable triceps extension",
          primaryMuscle: "triceps",
        },
        {
          name: "Reverse barbell curl",
          primaryMuscle: "biceps"
        }
      ]
    },
    {
      name: 'Killer coressssss',
      exercises: [
        {
          name: "Plank",
          primaryMuscle: "core"
        },
        {
          name: "Elbow to Knee",
          primaryMuscle: "core"
        },
        {
          name: "Cable crunch",
          primaryMuscle: "core",
        },
        {
          name: "Leg Raises",
          primaryMuscle: "core"
        },
        {
          name: "Ab roller",
          primaryMuscle: "core"
        },
        {
          name: "Rope crunch",
          primaryMuscle: "core"
        }
      ]
    },
    {
      name: 'Back and Bicep',
      exercises: [
        {
          name: "Single arm DB row",
          primaryMuscle: "back"
        },
        {
          name: "Preacher hammer dumbbell curl",
          primaryMuscle: "biceps"
        },
        {
          name: "Bent over barbbell row",
          primaryMuscle: "back",
        },
        {
          name: "Cable row",
          primaryMuscle: "back"
        },
        {
          name: "Pull aparts",
          primaryMuscle: "back"
        },
        {
          name: "Dumbbell curl",
          primaryMuscle: "biceps"
        },
        {
          name: "Reverse barbell curl",
          primaryMuscle: "biceps"
        }
      ]
    },
    {
      name: 'Legs all outs',
      exercises: [
        {
          name: "Box squat",
          primaryMuscle: "quads"
        },
        {
          name: "sumo deadlift",
          primaryMuscle: "hamstring"
        },
        {
          name: "Smith machine calf raises",
          primaryMuscle: "calves",
        },
        {
          name: "Lunges",
          primaryMuscle: "quads"
        },
        {
          name: "Front barbell squat",
          primaryMuscle: "quads"
        },
        {
          name: "Seated leg curl",
          primaryMuscle: "hamstring"
        }
      ]
    }
  ]
}

const store = new WorkoutStore()
export default store

