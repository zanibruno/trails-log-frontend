import React from 'react';
import { connect } from 'react-redux'
import {Router, Route} from 'react-router-dom'
import LocationsContainer from './containers/LocationsContainer.js'
import Home from './containers/Home.js'
import About from './containers/About.js'
import './styles/App.css'


class App extends React.Component {



  render() {
  return(
  	
    <div className='App'>
      <LocationsContainer/>
    </div>
    
    );
}
}

export default App

