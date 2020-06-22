import React from 'react'
import { connect } from 'react-redux'
import {fetchLocations} from '../actions/fetchLocations'
import Locations from '../components/Locations.js'
import LocationInput from '../components/LocationInput.js'


class LocationsContainer extends React.Component {

	componentDidMount() {
		this.props.fetchLocations()
		}

	render() {
		return(
			<div>
				<LocationInput/>
				<Locations locations={this.props.locations}/>
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