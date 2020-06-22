import React from 'react'



const Locations = (props) => {

	return (
		<div>
			{props.locations.map(location => <li key={location.id}>{location.postcode} - {location.name}</li>)}
		</div>
		)
}

export default Locations