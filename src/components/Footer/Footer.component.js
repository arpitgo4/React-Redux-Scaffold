import React from 'react';
import { Link } from 'react-router';

import styles from './style.scss';

export default class Footer extends React.Component {
	render(){
		console.log('styles', styles);
		return (
			<div className="container">
				<div className="btn-group">
					<Link to="/">
						<button className={`btn btn-default btn-sm ${styles.link}`}>NodeJS</button>
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