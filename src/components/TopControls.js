import React, { Component } from 'react'

class TopControls extends Component {
  handleLeftControlCompleted = () => {
    if (this.props.questStatus) {
      return 'show-completed'
    } else {
      return 'no-display'
    }
  }

  handleLeftControlQuests = () => {
    if (this.props.completedStatus) {
      return 'show-quests'
    } else {
      return 'no-display'
    }
  }

  handleRightControlRewards = () => {
    if (this.props.descriptionStatus) {
      return 'show-rewards'
    } else {
      return 'no-display'
    }
  }

  handleRightControlDescription = () => {
    if (this.props.rewardStatus) {
      return 'show-description'
    } else {
      return 'no-display'
    }
  }

  render() {
    return (
      <div className='control-container-top'>
        <h3 className='control-top-header'>Quest Log</h3>
        <span
          className={this.handleLeftControlCompleted()}
          onClick={this.props.showCompleted}
        >
          Show Completed
        </span>
        <span
          className={this.handleLeftControlQuests()}
          onClick={this.props.showQuests}
        >
          Show Quests
        </span>
        <span
          className={this.handleRightControlRewards()}
          onClick={this.props.showRewards}
        >
          Show Rewards
        </span>

        <span
          className={this.handleRightControlDescription()}
          onClick={this.props.showDescription}
        >
          Show Description
        </span>
      </div>
    )
  }
}

export default TopControls
