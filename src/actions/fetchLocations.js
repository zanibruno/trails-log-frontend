

export function fetchLocations() {
	return (dispatch) => {
	fetch('http://localhost:3000/api/v1/locations')
	.then(res => res.json())
	.then(locations => dispatch({
		type: 'FETCH_LOCATIONS',
		payload: locations
	}))
	}
}
