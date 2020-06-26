export const deleteTrail = (trailId, locationId) => {



	 return (dispatch) => {
		return fetch(`http://localhost:3000/api/v1/locations/${locationId}/trails/${trailId}`, {
			method: 'DELETE'
		})
		.then(response => response.json())
		.then(location => dispatch({type: 'DELETE_TRAIL', payload: location}))

	}

}