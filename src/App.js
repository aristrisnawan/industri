import { Home } from '@material-ui/icons'
import React, { Component } from 'react'
import Header from './components/Header'
import Homes from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
          <Header/> 
          <Homes/>  
          <Services/>
          <About/>
          <Footer/>     
      </div>
    )
  }
}

export default App

