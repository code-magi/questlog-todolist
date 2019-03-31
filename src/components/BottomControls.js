import React, { Component } from 'react'

class BottomControls extends Component {
  render() {
    return (
      <div className='control-container-bottom'>
        <input type='button' className='bottom-control-buttons' value='Add' />
        <input
          type='button'
          className='bottom-control-buttons'
          value='Abandon'
        />
        <input
          type='button'
          className='bottom-control-buttons'
          value='Complete'
        />
      </div>
    )
  }
}

export default BottomControls
