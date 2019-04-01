import React, { Component } from 'react'
import TopControls from './components/TopControls'
import MainContent from './components/MainContent'
import BottomControls from './components/BottomControls'
import './css/style.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      questStatus: true,
      completedStatus: false,
      descriptionStatus: true,
      rewardStatus: false
    }
  }

  showCompleted = () => {
    console.log('works')
    this.setState({ questStatus: false, completedStatus: true })
  }

  showRewards = () => {
    console.log('alsoworks')
    this.setState({ rewardStatus: true, descriptionStatus: false })
  }

  showQuests = () => {
    console.log('thisworks')
    this.setState({ questStatus: true, completedStatus: false })
  }

  showDescription = () => {
    console.log('test')
    this.setState({ rewardStatus: false, descriptionStatus: true })
  }

  render() {
    return (
      <div className='container'>
        <TopControls
          showCompleted={this.showCompleted}
          showRewards={this.showRewards}
          showQuests={this.showQuests}
          showDescription={this.showDescription}
          questStatus={this.state.questStatus}
          completedStatus={this.state.completedStatus}
          descriptionStatus={this.state.descriptionStatus}
          rewardStatus={this.state.rewardStatus}
        />
        <MainContent
          questStatus={this.state.questStatus}
          completedStatus={this.state.completedStatus}
          descriptionStatus={this.state.descriptionStatus}
          rewardStatus={this.state.rewardStatus}
        />
        <BottomControls />
      </div>
    )
  }
}

export default App
