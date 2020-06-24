import React from 'react'
import TrailInput from '../components/TrailInput.js'
import Trails from '../components/Trails.js'



class TrailsContainer extends React.Component {

render() {
	return(
		<div>
			<TrailInput/>
			<Trails trails={this.props.location && this.props.location.trails}/>
		</div>
	)
}


}

export default TrailsContainer