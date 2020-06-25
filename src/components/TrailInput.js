import React from 'react';
import { connect } from 'react-redux'
import { addTrail } from '../actions/addTrail'



class TrailInput extends React.Component {


	state = {
		name: '',
		level: '1',
		length: '',
		description: ''
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.addTrail(this.state, this.props.location.id)
		this.setState({
			name: '',
		level: '1',
		length: '',
		description: ''

		})
	}

	options() {
		let arr = []

		for (let i = 1; i <= 10; i++) {
			arr.push(<option>{i}</option>)
		}
		return arr
	}

	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Trail Name:</label>
					<input type='text' name='name' value={this.state.name} onChange={this.handleChange}/><br/>
					<label>Trail Level:</label>
					<select name='level' value={this.state.level} onChange={this.handleChange}>
						{this.options()}
					</select><br/>
					<label>Trail Length:</label>
					<input type='number' name='length' value={this.state.length} onChange={this.handleChange}/><br/>
					<label>Trail Description:</label>
					<input type='text' name='description' value={this.state.description} onChange={this.handleChange}/><br/>
					<input type='submit'/>
				</form>
			</div>
			)

	}


}

export default connect(null, {addTrail})(TrailInput)