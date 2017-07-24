import React from 'react';

import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component';

export default class AppLayout extends React.Component {
	render(){
		return (
		    <div id="app-container" className="container-fluid">
                <Header />                
            	{this.props.children}
            	<Footer />
            </div>
		);
	}
}