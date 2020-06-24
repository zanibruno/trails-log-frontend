import React from 'react'




const Location = (props) => {

	let location = props.locations[props.match.params.id - 1]
	console.log(location)
	return(
		<li>
			{location ? location.name : null} - {location ? location.postcode : null}
		</li>
	)

}

export default Location