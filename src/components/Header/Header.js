import React,  { Component, } from 'react';
import CSSModules from 'react-css-modules';

import styles from './style.scss';


class Header extends Component {

	render(){
		return (
			<h1 style={{ margin: '10 auto'}}>
				React-Redux-Scaffold
			</h1>
		)
	}
}

export default CSSModules(Header, styles);