import React from 'react'
import  { Header } from './Header'
import { Daily } from './Daily'
import {Select} from './Select'
import {Body} from './Body'


	
export const App = React.createClass({
	render() {
		return (
			<div> 
			<Header />
			<br/>
			<Select />	
			<Daily />
			<Body/>
			</div>
		)
	}
})