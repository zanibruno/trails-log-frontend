import React from 'react'
import { connect } from 'react-redux'
import {deleteTrail} from '../actions/deleteTrail.js'
import '../styles/TrailsContainer.css'


const Trails = (props) => {


	const handleDelete = (trail) => {
		props.deleteTrail(trail.id, trail.location_id)
	}
	
		return(
			<div>
					<ul className='trails-list'>
				{props.trails && props.trails.map(trail => 
					<li key={trail.id} className='trail'>Trail Name: {trail.name} -- Trail Level: {trail.level} -- Trail Length: {trail.length}m -- Trail Description: {trail.description}
					<button value='delete' onClick={() => handleDelete(trail)} className='delete-btn'>Delete</button>
					</li>
					)}</ul>
			</div>
			)


}

export default connect(null, {deleteTrail})(Trails)