import { Home } from '@material-ui/icons'
import React, { Component } from 'react'
import Header from './components/Header'
import Homes from './components/Home'
import Services from './components/Services'

class App extends Component {
  render() {
    return (
      <div>
          <Header/> 
          <Homes/>  
          <Services/>     
      </div>
    )
  }
}

export default App

