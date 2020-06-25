import React from 'react'


const Trails = (props) => {

	
		return(
			<div>
				{props.trails && props.trails.map(trail => 
					<li key={trail.id}>Trail Name: {trail.name} -- Trail Level: {trail.level} -- Trail Length: {trail.length}m -- Trail Description: {trail.description}</li>)}
			</div>
			)


}

export default Trails