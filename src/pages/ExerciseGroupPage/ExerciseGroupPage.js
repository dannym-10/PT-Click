import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import store from '@stores/ExerciseStore'
import SVGInline from 'svg-inline-react'
import Silhouette from '@icons/silhouette.svg'
import capitaliseFirstLetter from '@helpers/capitaliseFirstLetter'
import './ExerciseGroupPage.scss'

@observer
class ExerciseGroupPage extends Component {
  @observable error = null

  componentDidMount() {
    if (!store.exercises.length) {
      store.fetchExercises()
    }
  }

  bodyPartEnable = event => {
    event.preventDefault()
    const bodyPart = event.target.id
    const bodyPartID = 'body' + bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)
    const element = document.querySelector(".fyp-ExerciseGroupPage_wrapper-body g#" + bodyPartID)
    if (element) {
      element.style.fill = '#f2b632'
    }
  }

  bodyPartDisable = event => {
    event.preventDefault()
    const bodyPart = event.target.id
    const bodyPartID = 'body' + bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)
    const element = document.querySelector(".fyp-ExerciseGroupPage_wrapper-body g#" + bodyPartID)
    if (element) {
      element.style.fill = '#fff'
    }
  }

  renderCategories () {
    return store.categories.map((category) => {
      return (
        <Link key={category.url + category.title} styleName='category' to={`/exercises/${category.url}`} onMouseEnter={this.bodyPartEnable} onMouseLeave={this.bodyPartDisable} id={category.url}>
          {capitaliseFirstLetter(category.title)}
        </Link>
      )
    })
  }

  render () {
    return (
      <div>
        <div styleName='wrapper'>
          <div styleName='categories-wrapper'>
            {this.renderCategories()}
          </div>
          <div styleName='silhouette-img-wrapper'>
            <div styleName='wrapper-body'>
              <SVGInline src={Silhouette} mapname='theBody' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ExerciseGroupPage
