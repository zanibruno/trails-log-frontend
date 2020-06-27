import React from 'react'
import {connect} from 'react-redux'
import {addLocation} from '../actions/addLocation.js'
import '../styles/LocationInput.css'

class LocationInput extends React.Component {

	
	state = {postcode: '', name: ''}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.addLocation(this.state)
		this.setState({
			postcode: '',
			name: ''
		})	
	}

	render() {
		return(
			<div className='container'>
				<form onSubmit={this.handleSubmit}>
				<label htmlFor='post-code'>Post Code:</label><br/>
					<input type='text' placeholder='Post Code' value={this.state.postcode} name='postcode' onChange={this.handleChange}/><br/>
					<label htmlFor='name'>Name:</label><br/>
					<input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/><br/>
					<input type='submit' value='Create new Location'/>
				</form>
			</div>
		)
	}
}

export default connect(null, { addLocation })(LocationInput)