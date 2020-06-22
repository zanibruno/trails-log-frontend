

export default function locationReducer(state = { locations: [] }, action ) {

switch (action.type) {
	case 'FETCH_LOCATIONS':
		return {locations: action.payload}
	default: 
		return state
} 

}