import React from 'react';
import { connect } from 'react-redux'
import LocationsContainer from './containers/LocationsContainer.js'


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

