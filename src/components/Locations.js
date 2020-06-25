import React from 'react'
import {Route, Link} from 'react-router-dom'
import Location from './Location.js'



const Locations = (props) => {

	return(
		<div>
			{props.locations.map(location => 
				<li key={location.id}>
				<Link to={`/locations/${location.id}`}>{location.name}</Link>
				</li>
				)}
		</div>
		)

}

export default Locations