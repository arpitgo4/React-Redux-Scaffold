import React from 'react';

import Header from '../components/Header/Header';


export default class AppLayout extends React.Component {
	render(){
		return (
		    <div>
                <Header />                
            	{this.props.children}
            </div>
		);
	}
}