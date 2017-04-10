import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
	render(){
		return (
			<div className="container">
				<div className="btn-group">
					<Link to="/">
						<button className="btn btn-default btn-sm">NodeJS</button>
					</Link>
					<Link to="/express">
						<button className="btn btn-default btn-sm">ExpressJS</button>
					</Link>
					<Link to="/mongo">
						<button className="btn btn-default btn-sm">MongoDB</button>
					</Link>
					<Link to="/react">
						<button className="btn btn-default btn-sm">ReactJS</button>
					</Link>
				</div>
			</div>
		);
	}
}