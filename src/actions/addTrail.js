export const addTrail = (trail, locationId) => {
	return(dispatch) => {
		fetch(`http://localhost:3000/api/v1/locations/${locationId}/trails`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(trail)
		})
		.then(res => res.json())
		.then(location => dispatch({type: 'ADD_TRAIL', payload: location}))
	}
}
