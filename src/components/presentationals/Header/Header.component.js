import React from 'react';
import CSSModules from 'react-css-modules';
import superagent from 'superagent';

import styles from './style.scss';

@CSSModules(styles)
export default class Header extends React.Component {

	render(){
		return (
			<div className="container">
				<div className="row">
					<h1 className="col-sm-6 col-sm-offset-3 well well-lg text-center">
						React-Redux-Scaffold
					</h1>
				</div>
				<h1 styleName="header" className="page-header">
						React-Redux-Scaffold
				</h1>
			</div>
		)
	}
}

