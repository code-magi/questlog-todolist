import React, { Component } from 'react'

class TopControls extends Component {
  render() {
    return (
      <div className='control-container-top'>
        <h3 className='control-top-header'>Quest Log</h3>
        <span className='show-completed'>Show Completed</span>
        <span className='show-rewards'>Show Rewards</span>
      </div>
    )
  }
}

export default TopControls
