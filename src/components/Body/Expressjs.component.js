import React from 'react';
import { Link } from 'react-router';

export default class ExpressJS extends React.Component {

	render(){
		return (	
			<div className="container">
				<p className="lead">ExpressJS</p>				
				<p>ExpressJS is the server side framework for NodeJS platform.</p>	
				<i style={{ color: 'red' }} className="fa fa-facebook"></i>
			</div>
		)
	}

}