import React from 'react'
import Location from './Location.js'



const Locations = (props) => {

	return (
		<div>
			{props.locations.map(location => 
				<div key={location.id}><Location location={location}/></div>)}
		</div>
		)
}

export default Locations