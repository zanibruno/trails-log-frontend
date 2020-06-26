import React from 'react'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'



const HomeText = () => {

	return ( 
		<div> 
		<NavLink to='/locations' className='link'>Locations</NavLink>
		<NavLink to='/about' className='link'>About</NavLink>
		</div>
		)
}

export default HomeText