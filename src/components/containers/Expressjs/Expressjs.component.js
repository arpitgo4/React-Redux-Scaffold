import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class ExpressJS extends Component {

	render(){
		return (	
			<div className="container">
				<p className="lead">{this.props.heading}</p>				
				<p>{this.props.content}</p>
			</div>
		)
	}
}

const mapStateToProps = ({ content }) => {
	return {
		heading: content.expressjs.heading,
		content: content.expressjs.content
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ExpressJS);