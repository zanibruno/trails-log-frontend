import React from 'react'
import TrailInput from '../components/TrailInput.js'
import Trails from '../components/Trails.js'



class TrailsContainer extends React.Component {

render() {
	return(
		<div>
			<Trails trails={this.props.location && this.props.location.trails}/>
			<TrailInput location={this.props.location}/>
		</div>
	)
}


}

export default TrailsContainer