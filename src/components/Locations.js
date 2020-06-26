import React from 'react'
import {Route, Link} from 'react-router-dom'
import Location from './Location.js'
import '../styles/LocationContainer.css'
import {NavLink} from 'react-router-dom'
import LocationInput from '../components/LocationInput.js'



const Locations = (props) => {

	return(

		<div>
		<LocationInput/>
			{props.locations.map(location => 
				<ul className='location-list'>
				<li key={location.id}>
				<NavLink to={`/locations/${location.id}`} className='location'>{location.name}</NavLink>
				</li>
				</ul>
				)}

		</div>
		)

}

export default Locations