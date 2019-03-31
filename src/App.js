import React, { Component } from 'react'
import TopControls from './components/TopControls'
import MainContent from './components/MainContent'
import BottomControls from './components/BottomControls'
import './css/style.css'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <TopControls />
        <MainContent />
        <BottomControls />
      </div>
    )
  }
}

export default App
