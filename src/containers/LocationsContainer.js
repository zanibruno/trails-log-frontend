import React from 'react'
import { connect } from 'react-redux'
import {Route} from'react-router-dom'
import {fetchLocations} from '../actions/fetchLocations'
import Locations from '../components/Locations.js'
import Location from '../components/Location.js'
import LocationInput from '../components/LocationInput.js'


class LocationsContainer extends React.Component {

	componentDidMount() {
		this.props.fetchLocations()
		}

	render() {
		return(
			<div>
			<Route path='/locations/new' component={LocationInput}/>
			<Route path='/locations/:id' render={(routerProps) => <Location {...routerProps} locations={this.props.locations}/>}/>
			<Route exact path='/locations' render={(routerProps) => <Locations {...routerProps} locations={this.props.locations}/> } /> 
			
			</div>
	)


	}
}

const mapStateToProps = state => {
	return {
		locations: state.locations
	}
}

export default connect(mapStateToProps, {fetchLocations})(LocationsContainer)