import React from 'react'
import {Route, Link} from 'react-router-dom'
import Location from './Location.js'
import '../styles/LocationContainer.css'
import {NavLink} from 'react-router-dom'
import LocationInput from '../components/LocationInput.js'



class Locations extends React.Component {

	state = {
	}

	handleLike = (locationId) => {
		let count = 1
		if( this.state[locationId]) {
			this.setState({
			[event.target.id]: this.state[event.target.id] + 1
		})
		} else {
			this.setState({
			[event.target.id]: count
			})
		}
		
	}

	render() {
		return(

			<div>
			<LocationInput/>
					<ul className='location-list'>
				{this.props.locations.map(location => 
					<li key={location.id}>
					<NavLink to={`/locations/${location.id}`} className='location'>{location.name}</NavLink>
					<button id={location.id} onClick={() => this.handleLike(location.id)}>Likes: {this.state[location.id]}</button>
					</li>
					)}
					</ul>

			</div>
			)
	}
}

export default Locations