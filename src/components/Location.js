import React from 'react'
import {Redirect} from 'react-router-dom'
import TrailsContainer from '../containers/TrailsContainer.js'




const Location = (props) => {

	let location = props.locations[props.match.params.id - 1]
	// console.log(location)
	console.log(props)
	return(
		<div>
		<h2>
		{location ? null : <Redirect to='/locations'/>}
			{location ? location.name : null} - {location ? location.postcode : null}
		
		</h2>
		<TrailsContainer location={location}/>
		</div>
	)

}

export default Location