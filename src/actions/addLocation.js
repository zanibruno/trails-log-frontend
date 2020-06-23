

export const addLocation = (data) => {

	return (dispatch) => {
		fetch('http://localhost:3000/api/v1/locations', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(data)
		})
		.then(res => res.json())
		.then(location => dispatch({
			type: 'ADD_LOCATION',
			 payload: location
		}))
	}

}